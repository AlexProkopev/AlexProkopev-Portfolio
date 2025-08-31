

interface ImportMetaEnv {
  readonly LOCIZE_API_KEY: string
  readonly LOCIZE_PROJECT_ID: string
  readonly LOCIZE_VERSION: string
  readonly DEV: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
