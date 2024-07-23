declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO?: string
            PORT?: string
        }
    }
}

export {}