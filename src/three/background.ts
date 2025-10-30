import * as THREE from 'three'

export function initBackgroundScene(containerSelector = '#site-bg') {
  const container = document.querySelector<HTMLElement>(containerSelector)
  if (!container) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  camera.position.set(0, 0, 18)

  // Nebula gradient planes
  const makeGlow = (color: string, scale: number, x: number, y: number, rot = 0) => {
    const geo = new THREE.PlaneGeometry(1, 1)
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.12 })
    const m = new THREE.Mesh(geo, mat)
    m.scale.setScalar(scale)
    m.position.set(x, y, -5)
    m.rotation.z = rot
    scene.add(m)
    return m
  }
  const glow1 = makeGlow('#4c1d95', 24, -6, 2, 0.2)
  const glow2 = makeGlow('#0ea5e9', 22, 6, -1.5, -0.3)
  const glow3 = makeGlow('#8b5cf6', 18, 0, 3, 0.6)

  // Floating particles
  const particleCount = 1400
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }
  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const pMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.04, opacity: 0.25, transparent: true })
  const points = new THREE.Points(pGeo, pMat)
  scene.add(points)

  // Elegant orbs gliding along curves
  const makePath = (pointsArr: THREE.Vector3[], color: string) => {
    const curve = new THREE.CatmullRomCurve3(pointsArr, true)
    const geo = new THREE.SphereGeometry(0.18, 24, 24)
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color) })
    const orb = new THREE.Mesh(geo, mat)
    scene.add(orb)
    return { curve, orb, t: Math.random() }
  }
  const paths = [
    makePath(
      [
        new THREE.Vector3(-12, -4, -6),
        new THREE.Vector3(-6, 2, -5),
        new THREE.Vector3(0, 0, -8),
        new THREE.Vector3(6, 3, -6),
        new THREE.Vector3(12, -2, -5),
      ],
      '#7c3aed',
    ),
    makePath(
      [
        new THREE.Vector3(-10, 4, -7),
        new THREE.Vector3(-3, 1, -6),
        new THREE.Vector3(3, -2, -7),
        new THREE.Vector3(9, 1, -6),
      ],
      '#0ea5e9',
    ),
  ]

  const resize = () => {
    const rect = container.getBoundingClientRect()
    renderer.setSize(rect.width, rect.height)
    camera.aspect = rect.width / Math.max(rect.height, 1)
    camera.updateProjectionMatrix()
  }
  const ro = new ResizeObserver(resize)
  ro.observe(container)
  resize()

  // Parallax with pointer
  let targetX = 0, targetY = 0
  window.addEventListener('pointermove', (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1
    const ny = (e.clientY / window.innerHeight) * 2 - 1
    targetX = nx
    targetY = ny
  })

  let t = 0
  const animate = () => {
    t += 0.003
    glow1.position.x = -6 + Math.sin(t) * 0.6
    glow2.position.y = -1.5 + Math.cos(t * 0.8) * 0.5
    glow3.rotation.z += 0.0008
    points.rotation.y += 0.0007
    camera.position.x += (targetX * 0.8 - camera.position.x) * 0.03
    camera.position.y += (-targetY * 0.5 - camera.position.y) * 0.03
    // move orbs
    paths.forEach((p, i) => {
      p.t = (p.t + 0.0008 + i * 0.0002) % 1
      const pos = p.curve.getPoint(p.t)
      p.orb.position.copy(pos)
    })
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
}
