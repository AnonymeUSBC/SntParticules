# Les étapes du projets (T.Ren)

Je détails ici les étapes ayant mené à la création de ce projet, je tien ajouter que je détail pas l'entièreté des étapes, en raison du temps que cela prendrait :

## 1. Le Canvas

![Image du Canvas](https://github.com/AnonymeUSBC/SntParticules/blob/main/docAssets/Capture%20d'écran%202024-11-03%20103605.png)

ThreeJS est utilisé pour créer un espace 3D dans le canvas (.webgl). J'ai insérer un modèle 3D d'une terre sur [sketchfab](https://sketchfab.com/feed) (en faite les points colorés sur le globe représente des seismes), qui m'avais frappé par son style. C'est un modèle 3D composé de particules, téléchargé 
[ici](https://sketchfab.com/3d-models/earthquakes-2010-2011-3a57cfbbcb1c45278c13bc66886dd6ee), quand à la licence du modèle, c'est une licence [CC Attribution](https://creativecommons.org/licenses/by/4.0/). Après avoir importé le modèle j'applique un matériaux émissif à touts le modèle :

```
const pointMaterial = new THREE.MeshBasicMaterial({
    color: 0xff007f,
    emissive: 0xff007f,
    emissiveIntensity: 100.0,
    blending: THREE.AdditiveBlending
});
```

Puis applique un effet de post processing pour faire briller les points émissif, ce qui a pour effet de rendre les zones à séismes plus brillant:

```
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(sizes.width, sizes.height),
    5.0, // Strength
    0.8, // Radius
    0.2 // Threshold
);
composer.addPass(bloomPass);
```

Ensuite je faire tourner le modèle sur lui même en appliquant une rotation de l'axe Y dans la fonction tick, tournant à chaque tick, sois une vitesse variable, donc je le fait tourner par rapport au temps depuis l'ouverture du site

```
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    if (earthquake) {
        earthquake.rotation.y = elapsedTime * 0.05;
    }
[...]
}
```

Après je vais vouloir rétrécir la taille du canvas progressivement au scroll en pin (donc accroché à l'écran) jusqu'à cesser le pin grâce à GSAP.

![Image du Canvas](https://github.com/AnonymeUSBC/SntParticules/blob/main/docAssets/Capture%20d'écran%202024-11-03%20103933.png)

```
    canvas(canvas)
    {
        gsap.to(canvas, {
            scaleX: 0.7,
            scaleY: 0.7,
            borderRadius: "50",
            transformOrigin: "center center",
            scrollTrigger: {
                trigger: canvas,
                start: "top top",
                end: "+=1000",
                toggleActions: "play none none reverse",
                scrub: true,
                pin: true,
            }
        });
    }
```

## 2. Les Titres / Images

![Image du titre/image](https://github.com/AnonymeUSBC/SntParticules/blob/main/docAssets/Capture%20d'écran%202024-11-03%20105009.png)

Pour l'animation des titres et des images j'ai également utiliser GSAP (je l'ai énormément utiliser animer ce site), je fait agrandir au scroll .image_container qui agit comme une wrapper, et je fait rétrécir au scroll les .images, pour appliquer un contre-scale, et donner l'impression que .image s'agrandis par le millieu. Pour faire cela je leur applique par défaut un width/height identique, mais des scales différents qui seront animé pour être identique à 1, sois la taille qu'il auront à leur "apogé" (quand on scroll vraiment dessus). Je commence par le CSS :

```
.image_container
{
    width: 100%;
    height: 100%;
    [...]
    transform: scale(0.5);
    [...]
}
[...]
.image
{
    width: 100%;
    height: 100%;
    [...]
    transform: scale(2);
    [...]
}
```
Puis le JavaScript GSAP, qui applique l'animation :

```
gsap.to(img_container1,
    {
        scale: 1,
        scrollTrigger: {
            trigger: img1,
            toggleActions: "play none none reverse",
            scrub: true,
        }
    }
)

gsap.to(img1,
    {
        scale: 1,
        scrollTrigger: {
            trigger: img1,
            toggleActions: "play none none reverse",
            scrub: true,
        }
    }
)
```
Enfin je duplique cette effet sur les autres images :

![Image du titre/image](https://github.com/AnonymeUSBC/SntParticules/blob/main/docAssets/Capture%20d'écran%202024-11-03%20105056.png)

Après .image_container se détache de sa position et va prendre la quazi totalité de l'écran quand l'utilisateur clique dessus, pour cela le plugin Flip de GSAP est utilisé :

```
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
    [...]
}
```

## 3. Le Curseur

Pour le curseur circulaire j'ai pris un div que j'ai arrondi, puis fait en sorte que ce dernier suivent le curseur avec GSAP.
Je commence par récupérer les positions XY du curseur par rapport à la page quand le curseur bouge (cela aurait étais par rapport à l'écran si le curseur arrondi étais en "fixed")

```
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
```

Après je créer un ticker, qui va tourner à chaque tick, et déplacé le curseur arrondi vers le curseur, d'abord en récupérant à la distance à parcourir pour chaque axe X ou Y, je multiplie par 0.1 pour ralentir le mouvement, puis je fait avancer le cercle vers cette position :

```
gsap.ticker.add(() => {
    cursorX += (mouseX - cursorX) * 0.1; 
    cursorY += (mouseY - cursorY) * 0.1;

    gsap.set(cursor, {
        left: cursorX,
        top: cursorY
    });
});
```

Après un autre effet intéressant peut-être le changement de la forme du curseur. Pour cela j'utilise simplement GSAP, par example pour changer le curseur en changeant l'arrière plan, la taille, en enlevant la bordure et en ajoutant du texte, simplement en animant l'opacité de 0 à 1 (le texte étais déjà présent dans l'élement au départ mais avec une opacité de 0):

```
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
```

De même pour changer le curseur en image, je retire la bordure, met une image en fond et ajuste la taille du curseur à l'image en question:

```
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
```

## 4. 
