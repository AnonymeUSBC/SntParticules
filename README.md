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

Après je vais vouloir rétrécir la taille du canvas progressivement au scroll en pin (donc accroché à l'écran) jusqu'à cesser le pin.

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

## 3. Le Curseur

## 4. 
