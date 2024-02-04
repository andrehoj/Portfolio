import { StaticImageData } from "next/image"

declare module '*.png' {
    const content: string | StaticImageData
    export default content
}

export interface ImageType {
    width: number
    height: number
    src: string
}
