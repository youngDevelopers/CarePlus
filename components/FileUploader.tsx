"use client"

type FileUploaderProps = {
    files: File[] | undefined;
    onChange: (files: File[]) => void;
}

const FileUploader = ({files, onChange} : FileUploaderProps) => {
  return (
    <div>
      
    </div>
  )
}

export default FileUploader
