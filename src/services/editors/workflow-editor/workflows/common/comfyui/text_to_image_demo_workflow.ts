// note: there are 2 different graph schema for comfy ui
// a "workflow" schema used in the GUI of comfy (with node size, coordinates etc)
// and an "api workflow" schema used for API calls
//
// what you are seeing here is the API workflow schema (I haven't typed it yet)
export const text_to_image_demo_workflow = {
  '3': {
    inputs: {
      seed: 303533494192794,
      steps: 20,
      cfg: 8,
      sampler_name: 'euler',
      scheduler: 'normal',
      denoise: 1,
      model: ['4', 0],
      positive: ['6', 0],
      negative: ['7', 0],
      latent_image: ['5', 0],
    },
    class_type: 'KSampler',
    _meta: {
      title: 'KSampler',
    },
  },
  '4': {
    inputs: {
      ckpt_name: 'SD15/counterfeitV30_v30.safetensors',
    },
    class_type: 'CheckpointLoaderSimple',
    _meta: {
      title: 'Load Checkpoint',
    },
  },
  '5': {
    inputs: {
      width: 512,
      height: 512,
      batch_size: 1,
    },
    class_type: 'EmptyLatentImage',
    _meta: {
      title: 'Empty Latent Image',
    },
  },
  '6': {
    inputs: {
      text: 'beautiful scenery nature glass bottle landscape, , purple galaxy bottle,',
      clip: ['4', 1],
    },
    class_type: 'CLIPTextEncode',
    _meta: {
      title: 'CLIP Text Encode (Prompt)',
    },
  },
  '7': {
    inputs: {
      text: 'text, watermark',
      clip: ['4', 1],
    },
    class_type: 'CLIPTextEncode',
    _meta: {
      title: 'CLIP Text Encode (Prompt)',
    },
  },
  '8': {
    inputs: {
      samples: ['3', 0],
      vae: ['4', 2],
    },
    class_type: 'VAEDecode',
    _meta: {
      title: 'VAE Decode',
    },
  },
  '9': {
    inputs: {
      filename_prefix: 'ComfyUI',
      images: ['8', 0],
    },
    class_type: 'SaveImage',
    _meta: {
      title: 'Save Image',
    },
  },
}
