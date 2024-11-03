import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import Lenis from '@studio-freight/lenis';
import Animate from './gsap.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Flip from "gsap/Flip";
import SplitType from 'split-type';
import Event from './event.js';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

/**
 * Base
 */

gsap.registerPlugin(Flip) 
gsap.registerPlugin(CSSRulePlugin)

const animate = new Animate()
const event = new Event()

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const loadingManager = new THREE.LoadingManager()

/**
 * Point Material
 */
const pointMaterial = new THREE.MeshBasicMaterial({
    color: 0xff007f,
    emissive: 0xff007f,
    emissiveIntensity: 100.0,
    blending: THREE.AdditiveBlending
});

loadingManager.onProgress = (url, loaded, total) =>
{
    let pourcentage = (loaded / total) * 100
    document.getElementById('loader-progression').textContent = Math.floor(pourcentage) + '%'
}

let loaded = false
let textLoader = null
let textLoaderBelow = null
loadingManager.onLoad = () =>
{
    loaded = true
    document.getElementById('loader-progression').textContent = "ENTRER"
    textLoader = new SplitType('#loader-progression')
    textLoaderBelow = new SplitType('#loader-progression_under')
}

/**
 * GLTF Loader
 */

const gltfLoader = new GLTFLoader(loadingManager);

let earthquake = null;
gltfLoader.load("/models/earthquake.glb", function (gltf) {
    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = pointMaterial;
        }
    });
    earthquake = gltf.scene;
    scene.add(earthquake);
});

/**
 * Light
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const circle = document.getElementById('loader-circle')
const htmlLoader = document.getElementById('loader')

circle.addEventListener('click', () =>
    {
        if (loaded)
        {
            animate.loaded(circle, htmlLoader)
        }
    }
)

circle.addEventListener('mouseover', () =>
    {
        if (loaded)
        {
            animate.loaderText(textLoader.chars, textLoaderBelow.chars)
        }
    }
)

circle.addEventListener('mouseout', () =>
    {
        animate.loaderTextReverse(textLoader.chars, textLoaderBelow.chars)
    }
)

/**
 * Cursor
 */

const cursor = document.getElementById('cursor')
const cursorText = document.getElementById('cursor-text')

const text1_1 = document.getElementById('text1-1')
const text1_2 = document.getElementById('text1-2')
const text1_3 = document.getElementById('text1-3')
const text1_4 = document.getElementById('text1-4')

const text2_1 = document.getElementById('text2-1')
const text2_2 = document.getElementById('text2-2')
const text2_3 = document.getElementById('text2-3')
const text2_4 = document.getElementById('text2-4')

const text3_1 = document.getElementById('text3-1')
const text3_2 = document.getElementById('text3-2')
const text3_3 = document.getElementById('text3-3')
const text3_4 = document.getElementById('text3-4')

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

gsap.ticker.add(() => {
    cursorX += (mouseX - cursorX) * 0.1; 
    cursorY += (mouseY - cursorY) * 0.1;

    gsap.set(cursor, {
        left: cursorX,
        top: cursorY
    });
});

event.textImage(
    text1_1, text1_2, text1_3, text1_4,
    text2_1, text2_2, text2_3, text2_4,
    text3_1, text3_2, text3_3, text3_4,
)

window.addEventListener('resize', () => 
{


    // Rafraîchir ScrollTrigger à la redimensionnement
    ScrollTrigger.refresh();
});

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 2000);
camera.position.set(0, 0, 1);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Post-Processing - Bloom Effect
 */
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(sizes.width, sizes.height),
    5.0, // Strength
    0.8, // Radius
    0.2 // Threshold
);
composer.addPass(bloomPass);

/**
 * OrbitControl
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

/**
 * Lenis - Smooth Scroll
 */
const lenis = new Lenis({
    lerp: 100,           // Lissage du scroll
    smooth: true,        // Active le smooth scroll
    wheelMultiplier: 1.0
});

// Mettre à jour ScrollTrigger à chaque scroll Lenis
lenis.on('scroll', ScrollTrigger.update);

/**
 * Animation GSAP
 */

let img_container1 = document.getElementById('img_container1')
let img_container2 = document.getElementById('img_container2')
let img_container3 = document.getElementById('img_container3')

let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')

let text1 = new SplitType('#text1')
let text2 = new SplitType('#text2')
let text3 = new SplitType('#text3')

let subtext1 = new SplitType('#subtext1')
let subtext2 = new SplitType('#subtext2')
let subtext3 = new SplitType('#subtext3')

animate.canvas(canvas)
animate.image(img_container1, img_container2, img_container3, img1, img2, img3)
animate.text(text1.chars, text2.chars, text3.chars, subtext1.chars, subtext2.chars, subtext3.chars)

document.querySelectorAll('.image_container').forEach(container => {
    container.addEventListener('click', () => 
        {
        const state = Flip.getState(container)

        container.classList.toggle('expanded')

        Flip.from(state, {
            duration: 1,
            ease: 'power2.inOut',
        })

        if (!container.classList.contains('expanded')) {
            container.scrollTop = 0;
        }

        container.addEventListener('wheel', (e) => {
            e.stopPropagation();
        })
    }),
    container.addEventListener('mouseover', () => 
    {
        gsap.to(cursor,
            {
                scale: 2,
                border: '0px solid black',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                duration: 0.5,
            }
        )
        gsap.to(cursorText,
            {
                opacity: 1,
                duration: 0.5
            }
        )
    }),
    container.addEventListener('mouseout', () => 
    {
        gsap.to(cursor,
            {
                scale: 1,
                border: '1px solid black',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                duration: 0.5
            }
        )
        gsap.to(cursorText,
            {
                opacity: 0,
                duration: 0.5
            }
        )
    })
})

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    if (earthquake) {
        earthquake.rotation.y = elapsedTime * 0.05;
    }
    
    // Rafraîchir Lenis pour chaque frame
    lenis.raf(elapsedTime);

    controls.update();

    // Render with post-processing
    composer.render();

    requestAnimationFrame(tick);
};

tick();
