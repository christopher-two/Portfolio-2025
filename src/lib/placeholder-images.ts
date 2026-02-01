import data from './placeholder-images.json';

type RawImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  isGif?: boolean;
  isVideo?: boolean;
};

export type ImagePlaceholder = RawImagePlaceholder & {
  isGif: boolean;
  isVideo: boolean;
};

const placeholderData = data.placeholderImages as RawImagePlaceholder[];

const toPlaceholder = (placeholder: RawImagePlaceholder): ImagePlaceholder => {
  const isGifFromUrl = placeholder.imageUrl.toLowerCase().includes('.gif');
  const isVideoFromUrl = placeholder.imageUrl.toLowerCase().includes('.mp4') || placeholder.imageUrl.toLowerCase().includes('.webm');

  return {
    ...placeholder,
    isGif: placeholder.isGif ?? isGifFromUrl,
    isVideo: placeholder.isVideo ?? isVideoFromUrl,
  };
};

export const PlaceHolderImages: ImagePlaceholder[] = placeholderData.map(toPlaceholder);
