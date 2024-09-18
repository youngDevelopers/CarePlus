"use client"

import { useCallback } from "react";
import {useDropzone} from 'react-dropzone'

type FileUploaderProps = {
    files: File[] | undefined;
    onChange: (files: File[]) => void;
}

const FileUploader = ({files, onChange} : FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles)
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
  return (
    <div>
      
    </div>
  )
}

export default FileUploader
