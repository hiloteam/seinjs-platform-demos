export default {
  'start/start': require('../game/start/start'),
  'core/actor-component': require('../game/core/actor-component'),
  'core/scene-component-compose': require('../game/core/scene-component-compose'),
  'core/life-cycle': require('../game/core/life-cycle'),
  'core/unlink-relink': require('../game/core/unlink-relink'),
  'core/error-chain': require('../game/core/error-chain'),
  'core/timer': require('../game/core/timer'),
  'dispatch/single-level': require('../game/dispatch/single-level'),
  'dispatch/multiple-level': require('../game/dispatch/multiple-level'),
  'dispatch/multiple-world': require('../game/dispatch/multiple-world'),
  'render/layers': require('../game/render/layers'),
  'render/2d-sprite': require('../game/render/2d-sprite'),
  'render/render-order': require('../game/render/render-order'),
  'render/fog': require('../game/render/fog'),
  'render/advance': require('../game/render/advance'),
  'render/refraction': require('../game/render/refraction'),
  'material/pbr-material': require('../game/material/pbr-material'),
  'material/shader-material': require('../game/material/shader-material'),
  'material/raw-shader-material': require('../game/material/raw-shader-material'),
  'material/shader-chunk': require('../game/material/shader-chunk'),
  'material/material-extension': require('../game/material/material-extension'),
  'material/khr-technique-webgl': require('../game/material/khr-technique-webgl'),
  'material/global-uniform-material': require('../game/material/global-uniform-material'),
  'material/custom-semantic': require('../game/material/custom-semantic'),
  'material/render-options': require('../game/material/render-options'),
  'atlas/basic': require('../game/atlas/basic'),
  'atlas/from-grid': require('../game/atlas/from-grid'),
  'atlas/from-texture': require('../game/atlas/from-texture'),
  'atlas/allocate-release': require('../game/atlas/allocate-release'),
  'camera/perspective-camera': require('../game/camera/perspective-camera'),
  'camera/orthographic-camera': require('../game/camera/orthographic-camera'),
  'camera/actor-observe-control': require('../game/camera/actor-observe-control'),
  'camera/camera-orbit-control': require('../game/camera/camera-orbit-control'),
  'camera/camera-free-control': require('../game/camera/camera-free-control'),
  'light/ambient-light': require('../game/light/ambient-light'),
  'light/directional-light': require('../game/light/directional-light'),
  'light/point-light': require('../game/light/point-light'),
  'light/spot-light': require('../game/light/spot-light'),
  'light/shadow': require('../game/light/shadow'),
  'light/baking': require('../game/light/baking'),
  'bsp/box': require('../game/bsp/box'),
  'bsp/sphere': require('../game/bsp/sphere'),
  'bsp/plane': require('../game/bsp/plane'),
  'bsp/cylinder': require('../game/bsp/cylinder'),
  'bsp/morph': require('../game/bsp/morph'),
  'event/basic': require('../game/event/basic'),
  'event/custom-trigger': require('../game/event/custom-trigger'),
  'event/global': require('../game/event/global'),
  'hid/touch': require('../game/hid/touch'),
  'resource/image-loader': require('../game/resource/image-loader'),
  'resource/texture-loader': require('../game/resource/texture-loader'),
  'resource/cube-texture-loader': require('../game/resource/cube-texture-loader'),
  'resource/atlas-loader': require('../game/resource/atlas-loader'),
  'resource/gltf-loader': require('../game/resource/gltf-loader'),
  'resource/free-load': require('../game/resource/free-load'),
  'resource/glb-load': require('../game/resource/glb-load'),
  'resource/cancel': require('../game/resource/cancel'),
  'resource/gltf-morph': require('../game/resource/gltf-morph'),
  'resource/gltf-skeletal': require('../game/resource/gltf-skeletal'),
  'animation/2d-sprite': require('../game/animation/2d-sprite'),
  'animation/model': require('../game/animation/model'),
  'animation/tween': require('../game/animation/tween'),
  'animation/custom': require('../game/animation/custom'),
  'animation/events': require('../game/animation/events'),
  'animation/combination': require('../game/animation/combination'),
  'physic/base': require('../game/physic/base'),
  'physic/collision-events': require('../game/physic/collision-events'),
  'physic/pick': require('../game/physic/pick'),
  'physic/disable': require('../game/physic/disable'),
  'player/ai': require('../game/player/ai'),
  'player/player': require('../game/player/player'),
  'gpu-particle-system/edge-emitter': require('../game/gpu-particle-system/edge-emitter'),
  'gpu-particle-system/atlas': require('../game/gpu-particle-system/atlas'),
  'gpu-particle-system/wind-emitter': require('../game/gpu-particle-system/wind-emitter'),
  'gpu-particle-system/sphere-emitter': require('../game/gpu-particle-system/sphere-emitter'),
  'gpu-particle-system/hemispheric-emitter': require('../game/gpu-particle-system/hemispheric-emitter'),
  'gpu-particle-system/custom-trajectory': require('../game/gpu-particle-system/custom-trajectory'),
  'post-processing-system/threshold': require('../game/post-processing-system/threshold'),
  'post-processing-system/local-threshold': require('../game/post-processing-system/local-threshold'),
  'post-processing-system/bloom': require('../game/post-processing-system/bloom'),
};
