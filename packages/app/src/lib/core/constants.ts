// do we really want a high value here?
// who is seriously ready to spawn 32 GPUs in parallel for this?
export const HARD_LIMIT_NB_MAX_ASSETS_TO_GENERATE_IN_PARALLEL = 32

export const APP_NAME = 'Clapper.app'
export const APP_REVISION = '20241010+1842'

export const APP_DOMAIN = 'Clapper.app'
export const APP_LINK = 'https://clapper.app'

// previously 'https://cdn.themetavoice.xyz/speakers/bria.mp3'

// default assets, see: https://huggingface.co/datasets/jbilcke-hf/open-identities
export const sampleVoice =
  'https://huggingface.co/datasets/jbilcke-hf/open-identities/resolve/main/voice-identities/fr-bedtime-story-cloee.mp3?download=true'

export const sampleDrivingVideo =
  'https://huggingface.co/datasets/jbilcke-hf/open-identities/resolve/main/driving-videos/sample-0001.mp4?download=true'

export const sampleFace =
  'https://huggingface.co/datasets/jbilcke-hf/open-identities/resolve/main/face-identities/3fe3fcb2-dcf0-4532-af58-affd3740aa90.jpeg?download=true'
