import { AiFillFileExcel, AiFillFileImage, AiFillFilePdf, AiFillFileText, AiFillFileWord, AiOutlineGif, AiTwotoneFileImage } from "react-icons/ai";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { FaFileCsv, FaFilePowerpoint, FaFileVideo } from "react-icons/fa";
import { ImSvg } from "react-icons/im";
import { SiApplemusic } from "react-icons/si";
import { MdMovie } from "react-icons/md";

const extensions = [
    {
        type: 'pdf',
        extension: '.pdf',
        icon: AiFillFilePdf
    },
    {
        type: 'doc',
        extension: '.doc',
        icon: AiFillFileWord
    },
    {
        type: 'docx',
        extension: '.docx',
        icon: AiFillFileWord
    },
    {
        type: 'xls',
        extension: '.xls',
        icon: AiFillFileExcel
    },
    {
        type: 'xlsx',
        extension: '.xlsx',
        icon: AiFillFileExcel
    },
    {
        type: 'ppt',
        extension: '.ppt',
        icon: FaFilePowerpoint
    },
    {
        type: 'pptx',
        extension: '.pptx',
        icon: FaFilePowerpoint
    },
    {
        type: 'txt',
        extension: '.txt',
        icon: FaFilePowerpoint
    },
    {
        type: 'pptx',
        extension: '.pptx',
        icon: AiFillFileText
    },
    {
        type: 'csv',
        extension: '.csv',
        icon: FaFileCsv
    },
    {
        type: 'jpg',
        extension: '.jpg',
        icon: AiFillFileImage
    },
    {
        type: 'jpeg',
        extension: '.jpeg',
        icon: AiFillFileImage
    },
    {
        type: 'png',
        extension: '.png',
        icon: BsFileEarmarkImageFill
    },
    {
        type: 'gif',
        extension: '.gif',
        icon: AiOutlineGif
    },
    {
        type: 'bmp',
        extension: '.bmp',
        icon: AiTwotoneFileImage
    },
    {
        type: 'svg',
        extension: '.svg',
        icon: ImSvg
    },
    {
        type: 'mp3',
        extension: '.mp3',
        icon: SiApplemusic
    },
    {
        type: 'mp4',
        extension: '.mp4',
        icon: FaFileVideo
    },
    {
        type: 'mov',
        extension: '.mov',
        icon: MdMovie
    },
]

export function getTypeOfDocument(extensionParam) {
    for (let extension of extensions) {
        if (extension.extension === extensionParam) return extension
    }
    return null
}

export function getDocumentsOfRange(documents, range) {
    return documents?.filter(document => document.rangue_number === range)
}

export function validateRange(range) {
    switch (range) {
        case "Chronos 10":
            return 4
        case "Chronos 50":
            return 5
        case "Chronos 100":
            return 6
        case "Chronos 200":
            return 7
        case "Chronos 500":
            return 8
        case "EON":
            return 9
        case "E2":
            return 1
        case "E3":
            return 2
        case "E4":
            return 3
        default:
            return 0
                
        }
}

