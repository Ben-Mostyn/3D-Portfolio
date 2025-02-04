### Models

The way models work are that each model needs to be rendered somewhere. We render this by itself. Different things can be added but the important thing to note, is I render each model in a component.

Each rendered component needs to be then placed inside of a scene. AKA a Canvas. Think of a Canvas as just that, a Canvas. This is where we place our models, give it the correct lighting etc to be able to be seen and interacted with

#### Elements
<Canvas> This takes a camera prop, which is the camera in which we will see the 3D model from

<Canvas camera={{position: [0, 0, 5]}}>

inside this canvas we can have a lot of things to help enhance the 3D expereience

<OrbitalControls> Allows the user to interact with the 3D model
<ambientLight> Gives ambient light. A canvas scene needs a light source. Models without a light source present result in a black object (You can see it without light)
<pointLight position = {[10, 10, 10]}> Literally just a spot light that can be placed onto the model with the correct position