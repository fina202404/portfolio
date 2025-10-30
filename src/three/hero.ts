import * as THREE from 'three'

export function initHeroScene(containerSelector: string) {
  const container = document.querySelector<HTMLDivElement>(containerSelector)
  if (!container) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  camera.position.set(0, 0, 10)

  const geometry = new THREE.IcosahedronGeometry(3, 3)
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#8b5cf6'),
    metalness: 0.2,
    roughness: 0.3,
    wireframe: true,
  })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambient)
  const dir = new THREE.DirectionalLight(0xffffff, 1)
  dir.position.set(5, 5, 5)
  scene.add(dir)

  const particles = new THREE.Points(
    new THREE.BufferGeometry().setFromPoints(
      new Array(1500).fill(0).map(() =>
        new THREE.Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 18,
        ),
      ),
    ),
    new THREE.PointsMaterial({ color: '#ffffff', size: 0.02, transparent: true, opacity: 0.4 }),
  )
  scene.add(particles)

  const resize = () => {
    const { width, height } = container.getBoundingClientRect()
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  const ro = new ResizeObserver(resize)
  ro.observe(container)
  resize()

  let t = 0
  const animate = () => {
    t += 0.005
    mesh.rotation.x += 0.002
    mesh.rotation.y += 0.003
    particles.rotation.y -= 0.0008
    particles.position.y = Math.sin(t) * 0.2
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  // Mouse parallax
  window.addEventListener('pointermove', (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1
    const ny = (e.clientY / window.innerHeight) * 2 - 1
    camera.position.x = nx * 0.6
    camera.position.y = -ny * 0.4
  })
}

