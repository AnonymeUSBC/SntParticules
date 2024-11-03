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

## 4. 
