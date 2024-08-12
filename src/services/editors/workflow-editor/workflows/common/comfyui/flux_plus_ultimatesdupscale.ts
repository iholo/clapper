import { ComfyuiWorkflow } from '@/components/editors/WorkflowEditor/WorkflowViewer/ReactFlowCanvas/formats/comfyui/types'

// note: there are 2 different graph schema for comfy ui
// a "workflow" schema used in the GUI of comfy (with node size, coordinates etc)
// and an "api workflow" schema used for API calls
//
// what you are seeing here is the GUI workflow schema
export const fluxUltimateSDUpscale: ComfyuiWorkflow = {
  last_node_id: 58,
  last_link_id: 97,
  nodes: [
    {
      id: 37,
      type: 'Reroute',
      pos: [390, 120],
      size: [75, 26],
      flags: {},
      order: 6,
      mode: 0,
      inputs: [
        {
          name: '',
          type: '*',
          link: 58,
        },
      ],
      outputs: [
        {
          name: '',
          type: 'MODEL',
          links: [60],
          slot_index: 0,
        },
      ],
      properties: {
        showOutputText: false,
        horizontal: false,
      },
    },
    {
      id: 39,
      type: 'Reroute',
      pos: [390, 80],
      size: [75, 26],
      flags: {},
      order: 9,
      mode: 0,
      inputs: [
        {
          name: '',
          type: '*',
          link: 62,
        },
      ],
      outputs: [
        {
          name: '',
          type: 'VAE',
          links: [64],
          slot_index: 0,
        },
      ],
      properties: {
        showOutputText: false,
        horizontal: false,
      },
    },
    {
      id: 30,
      type: 'CheckpointLoaderSimple',
      pos: [40, 190],
      size: {
        '0': 320,
        '1': 100,
      },
      flags: {},
      order: 0,
      mode: 0,
      outputs: [
        {
          name: 'MODEL',
          type: 'MODEL',
          links: [58],
          shape: 3,
          slot_index: 0,
        },
        {
          name: 'CLIP',
          type: 'CLIP',
          links: [45, 54],
          shape: 3,
          slot_index: 1,
        },
        {
          name: 'VAE',
          type: 'VAE',
          links: [62],
          shape: 3,
          slot_index: 2,
        },
      ],
      properties: {
        'Node name for S&R': 'CheckpointLoaderSimple',
      },
      widgets_values: ['flux\\flux1-dev-fp8.safetensors'],
    },
    {
      id: 9,
      type: 'SaveImage',
      pos: [1660, 190],
      size: {
        '0': 985.3012084960938,
        '1': 1060.3828125,
      },
      flags: {},
      order: 18,
      mode: 0,
      inputs: [
        {
          name: 'images',
          type: 'IMAGE',
          link: 9,
        },
      ],
      properties: {
        'Node name for S&R': 'SaveImage',
      },
      widgets_values: ['flux/img_'],
    },
    {
      id: 27,
      type: 'EmptySD3LatentImage',
      pos: [820, 610],
      size: {
        '0': 210,
        '1': 100,
      },
      flags: {},
      order: 11,
      mode: 0,
      inputs: [
        {
          name: 'width',
          type: 'INT',
          link: 67,
          widget: {
            name: 'width',
          },
        },
        {
          name: 'height',
          type: 'INT',
          link: 68,
          widget: {
            name: 'height',
          },
        },
      ],
      outputs: [
        {
          name: 'LATENT',
          type: 'LATENT',
          links: [69],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: {
        'Node name for S&R': 'EmptySD3LatentImage',
      },
      widgets_values: [1024, 1024, 1],
      color: '#323',
      bgcolor: '#535',
    },
    {
      id: 34,
      type: 'Note',
      pos: [1100, 720],
      size: {
        '0': 320,
        '1': 130,
      },
      flags: {},
      order: 1,
      mode: 0,
      properties: {
        text: '',
      },
      widgets_values: [
        'Note that Flux dev and schnell do not have any negative prompt so CFG should be set to 1.0. Setting CFG to 1.0 means the negative prompt is ignored.',
      ],
      color: '#432',
      bgcolor: '#653',
    },
    {
      id: 44,
      type: 'Note',
      pos: [40, 350],
      size: {
        '0': 320,
        '1': 130,
      },
      flags: {},
      order: 2,
      mode: 0,
      properties: {
        text: '',
      },
      widgets_values: [
        'https://huggingface.co/Comfy-Org/flux1-dev/blob/main/flux1-dev-fp8.safetensors\n(ComfyUI\\models\\checkpoints\\flux)',
      ],
      color: '#432',
      bgcolor: '#653',
    },
    {
      id: 38,
      type: 'Reroute',
      pos: [960, 120],
      size: [75, 26],
      flags: {},
      order: 13,
      mode: 0,
      inputs: [
        {
          name: '',
          type: '*',
          link: 60,
        },
      ],
      outputs: [
        {
          name: '',
          type: 'MODEL',
          links: [61, 71],
          slot_index: 0,
        },
      ],
      properties: {
        showOutputText: false,
        horizontal: false,
      },
    },
    {
      id: 35,
      type: 'FluxGuidance',
      pos: [830, 190],
      size: {
        '0': 211.60000610351562,
        '1': 58,
      },
      flags: {},
      order: 14,
      mode: 0,
      inputs: [
        {
          name: 'conditioning',
          type: 'CONDITIONING',
          link: 56,
        },
      ],
      outputs: [
        {
          name: 'CONDITIONING',
          type: 'CONDITIONING',
          links: [57, 72],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: {
        'Node name for S&R': 'FluxGuidance',
      },
      widgets_values: [3.5],
    },
    {
      id: 33,
      type: 'CLIPTextEncode',
      pos: [390, 400],
      size: [420, 160],
      flags: {
        collapsed: false,
      },
      order: 8,
      mode: 0,
      inputs: [
        {
          name: 'clip',
          type: 'CLIP',
          link: 54,
          slot_index: 0,
        },
      ],
      outputs: [
        {
          name: 'CONDITIONING',
          type: 'CONDITIONING',
          links: [55, 73],
          slot_index: 0,
        },
      ],
      title: 'CLIP Text Encode (Negative Prompt)',
      properties: {
        'Node name for S&R': 'CLIPTextEncode',
      },
      widgets_values: [''],
      color: '#322',
      bgcolor: '#533',
      locked: true,
    },
    {
      id: 40,
      type: 'Reroute',
      pos: [1340, 80],
      size: [75, 26],
      flags: {},
      order: 15,
      mode: 0,
      inputs: [
        {
          name: '',
          type: '*',
          link: 64,
        },
      ],
      outputs: [
        {
          name: '',
          type: 'VAE',
          links: [65, 74],
          slot_index: 0,
        },
      ],
      properties: {
        showOutputText: false,
        horizontal: false,
      },
    },
    {
      id: 46,
      type: 'UpscaleModelLoader',
      pos: [820, 1060],
      size: {
        '0': 210,
        '1': 60,
      },
      flags: {},
      order: 3,
      mode: 0,
      outputs: [
        {
          name: 'UPSCALE_MODEL',
          type: 'UPSCALE_MODEL',
          links: [75],
          shape: 3,
        },
      ],
      properties: {
        'Node name for S&R': 'UpscaleModelLoader',
      },
      widgets_values: ['4x-UltraSharp.pth'],
    },
    {
      id: 48,
      type: 'SaveImage',
      pos: [2650, 190],
      size: {
        '0': 985.3012084960938,
        '1': 1060.3828125,
      },
      flags: {},
      order: 20,
      mode: 0,
      inputs: [
        {
          name: 'images',
          type: 'IMAGE',
          link: 77,
        },
      ],
      properties: {
        'Node name for S&R': 'SaveImage',
      },
      widgets_values: ['flux/img_'],
    },
    {
      id: 8,
      type: 'VAEDecode',
      pos: [1440, 190],
      size: {
        '0': 210,
        '1': 50,
      },
      flags: {},
      order: 17,
      mode: 0,
      inputs: [
        {
          name: 'samples',
          type: 'LATENT',
          link: 52,
        },
        {
          name: 'vae',
          type: 'VAE',
          link: 65,
        },
      ],
      outputs: [
        {
          name: 'IMAGE',
          type: 'IMAGE',
          links: [9, 70, 88],
          slot_index: 0,
        },
      ],
      properties: {
        'Node name for S&R': 'VAEDecode',
      },
    },
    {
      id: 54,
      type: 'Image Comparer (rgthree)',
      pos: {
        '0': 3660,
        '1': 190,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
      },
      size: [790, 1060],
      flags: {},
      order: 21,
      mode: 0,
      inputs: [
        {
          name: 'image_a',
          type: 'IMAGE',
          link: 88,
          dir: 3,
        },
        {
          name: 'image_b',
          type: 'IMAGE',
          link: 89,
          dir: 3,
        },
      ],
      outputs: [],
      properties: {
        comparer_mode: 'Slide',
      },
      widgets_values: [
        [
          {
            name: 'A',
            selected: true,
            url: '/view?filename=rgthree.compare._temp_bslpf_00013_.png&type=temp&subfolder=&rand=0.6440769801357371',
          },
          {
            name: 'B',
            selected: true,
            url: '/view?filename=rgthree.compare._temp_bslpf_00014_.png&type=temp&subfolder=&rand=0.08215616275940874',
          },
        ],
      ],
    },
    {
      id: 45,
      type: 'UltimateSDUpscale',
      pos: [1100, 960],
      size: [320, 830],
      flags: {},
      order: 19,
      mode: 0,
      inputs: [
        {
          name: 'image',
          type: 'IMAGE',
          link: 70,
        },
        {
          name: 'model',
          type: 'MODEL',
          link: 71,
        },
        {
          name: 'positive',
          type: 'CONDITIONING',
          link: 72,
        },
        {
          name: 'negative',
          type: 'CONDITIONING',
          link: 73,
        },
        {
          name: 'vae',
          type: 'VAE',
          link: 74,
        },
        {
          name: 'upscale_model',
          type: 'UPSCALE_MODEL',
          link: 75,
          slot_index: 5,
        },
        {
          name: 'upscale_by',
          type: 'FLOAT',
          link: 91,
          widget: {
            name: 'upscale_by',
          },
          slot_index: 6,
        },
        {
          name: 'tile_width',
          type: 'INT',
          link: 94,
          widget: {
            name: 'tile_width',
          },
        },
        {
          name: 'tile_height',
          type: 'INT',
          link: 97,
          widget: {
            name: 'tile_height',
          },
        },
      ],
      outputs: [
        {
          name: 'IMAGE',
          type: 'IMAGE',
          links: [77, 89],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: {
        'Node name for S&R': 'UltimateSDUpscale',
      },
      widgets_values: [
        2,
        1000122408342527,
        'fixed',
        20,
        1,
        'euler',
        'simple',
        0.25,
        'Linear',
        1024,
        1024,
        16,
        32,
        'None',
        0.25,
        64,
        16,
        16,
        true,
        false,
      ],
    },
    {
      id: 57,
      type: 'MathExpression|pysssss',
      pos: [760, 1290],
      size: [270, 116.00003433227539],
      flags: {},
      order: 10,
      mode: 0,
      inputs: [
        {
          name: 'a',
          type: 'INT,FLOAT,IMAGE,LATENT',
          link: 92,
        },
        {
          name: 'b',
          type: 'INT,FLOAT,IMAGE,LATENT',
          link: 93,
        },
        {
          name: 'c',
          type: 'INT,FLOAT,IMAGE,LATENT',
          link: null,
        },
      ],
      outputs: [
        {
          name: 'INT',
          type: 'INT',
          links: [94],
          shape: 3,
          slot_index: 0,
        },
        {
          name: 'FLOAT',
          type: 'FLOAT',
          links: null,
          shape: 3,
        },
      ],
      title: 'tile height (Math Expression 🐍)',
      properties: {
        'Node name for S&R': 'MathExpression|pysssss',
      },
      widgets_values: ['a * b / 2 + 32'],
      color: '#432',
      bgcolor: '#653',
    },
    {
      id: 56,
      type: 'easy float',
      pos: [820, 1170],
      size: [210, 60],
      flags: {},
      order: 4,
      mode: 0,
      outputs: [
        {
          name: 'float',
          type: 'FLOAT',
          links: [91, 92, 95],
          shape: 3,
          slot_index: 0,
        },
      ],
      title: 'upscale by',
      properties: {
        'Node name for S&R': 'easy float',
      },
      widgets_values: [2],
    },
    {
      id: 58,
      type: 'MathExpression|pysssss',
      pos: [760, 1460],
      size: {
        '0': 270,
        '1': 116.00003051757812,
      },
      flags: {},
      order: 12,
      mode: 0,
      inputs: [
        {
          name: 'a',
          type: 'INT,FLOAT,IMAGE,LATENT',
          link: 95,
        },
        {
          name: 'b',
          type: 'INT,FLOAT,IMAGE,LATENT',
          link: 96,
        },
        {
          name: 'c',
          type: 'INT,FLOAT,IMAGE,LATENT',
          link: null,
        },
      ],
      outputs: [
        {
          name: 'INT',
          type: 'INT',
          links: [97],
          shape: 3,
          slot_index: 0,
        },
        {
          name: 'FLOAT',
          type: 'FLOAT',
          links: null,
          shape: 3,
        },
      ],
      title: 'tile height (Math Expression 🐍)',
      properties: {
        'Node name for S&R': 'MathExpression|pysssss',
      },
      widgets_values: ['a * b / 2 + 32'],
      color: '#432',
      bgcolor: '#653',
    },
    {
      id: 43,
      type: 'SDXLAspectRatioSelector',
      pos: [390, 610],
      size: {
        '0': 420,
        '1': 100,
      },
      flags: {},
      order: 5,
      mode: 0,
      outputs: [
        {
          name: 'ratio',
          type: 'STRING',
          links: null,
          shape: 3,
        },
        {
          name: 'width',
          type: 'INT',
          links: [67, 93],
          shape: 3,
          slot_index: 1,
        },
        {
          name: 'height',
          type: 'INT',
          links: [68, 96],
          shape: 3,
          slot_index: 2,
        },
      ],
      properties: {
        'Node name for S&R': 'SDXLAspectRatioSelector',
      },
      widgets_values: ['2:3'],
    },
    {
      id: 31,
      type: 'KSampler',
      pos: [1100, 190],
      size: [320, 470],
      flags: {},
      order: 16,
      mode: 0,
      inputs: [
        {
          name: 'model',
          type: 'MODEL',
          link: 61,
        },
        {
          name: 'positive',
          type: 'CONDITIONING',
          link: 57,
        },
        {
          name: 'negative',
          type: 'CONDITIONING',
          link: 55,
        },
        {
          name: 'latent_image',
          type: 'LATENT',
          link: 69,
          slot_index: 3,
        },
      ],
      outputs: [
        {
          name: 'LATENT',
          type: 'LATENT',
          links: [52],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: {
        'Node name for S&R': 'KSampler',
      },
      widgets_values: [540311436836572, 'fixed', 20, 1, 'euler', 'simple', 1],
    },
    {
      id: 6,
      type: 'CLIPTextEncode',
      pos: [390, 190],
      size: {
        '0': 430,
        '1': 160,
      },
      flags: {},
      order: 7,
      mode: 0,
      inputs: [
        {
          name: 'clip',
          type: 'CLIP',
          link: 45,
        },
      ],
      outputs: [
        {
          name: 'CONDITIONING',
          type: 'CONDITIONING',
          links: [56],
          slot_index: 0,
        },
      ],
      title: 'CLIP Text Encode (Positive Prompt)',
      properties: {
        'Node name for S&R': 'CLIPTextEncode',
      },
      widgets_values: [
        'VitWaterStyle, 1girl, beautiful, white hair, long hair, bangs, fair skin, big breasts, leather armor, sword, forest, dappled sunlight, upper body, looking at viewer',
      ],
      color: '#232',
      bgcolor: '#353',
    },
  ],
  links: [
    [9, 8, 0, 9, 0, 'IMAGE'],
    [45, 30, 1, 6, 0, 'CLIP'],
    [52, 31, 0, 8, 0, 'LATENT'],
    [54, 30, 1, 33, 0, 'CLIP'],
    [55, 33, 0, 31, 2, 'CONDITIONING'],
    [56, 6, 0, 35, 0, 'CONDITIONING'],
    [57, 35, 0, 31, 1, 'CONDITIONING'],
    [58, 30, 0, 37, 0, '*'],
    [60, 37, 0, 38, 0, '*'],
    [61, 38, 0, 31, 0, 'MODEL'],
    [62, 30, 2, 39, 0, '*'],
    [64, 39, 0, 40, 0, '*'],
    [65, 40, 0, 8, 1, 'VAE'],
    [67, 43, 1, 27, 0, 'INT'],
    [68, 43, 2, 27, 1, 'INT'],
    [69, 27, 0, 31, 3, 'LATENT'],
    [70, 8, 0, 45, 0, 'IMAGE'],
    [71, 38, 0, 45, 1, 'MODEL'],
    [72, 35, 0, 45, 2, 'CONDITIONING'],
    [73, 33, 0, 45, 3, 'CONDITIONING'],
    [74, 40, 0, 45, 4, 'VAE'],
    [75, 46, 0, 45, 5, 'UPSCALE_MODEL'],
    [77, 45, 0, 48, 0, 'IMAGE'],
    [88, 8, 0, 54, 0, 'IMAGE'],
    [89, 45, 0, 54, 1, 'IMAGE'],
    [91, 56, 0, 45, 6, 'FLOAT'],
    [92, 56, 0, 57, 0, 'INT,FLOAT,IMAGE,LATENT'],
    [93, 43, 1, 57, 1, 'INT,FLOAT,IMAGE,LATENT'],
    [94, 57, 0, 45, 7, 'INT'],
    [95, 56, 0, 58, 0, 'INT,FLOAT,IMAGE,LATENT'],
    [96, 43, 2, 58, 1, 'INT,FLOAT,IMAGE,LATENT'],
    [97, 58, 0, 45, 8, 'INT'],
  ],
  groups: [],
  config: {},
  extra: {
    ds: {
      scale: 0.6830134553650705,
      offset: [-1420.2171836433743, 117.31047235297616],
    },
  },
  version: 0.4,
}
