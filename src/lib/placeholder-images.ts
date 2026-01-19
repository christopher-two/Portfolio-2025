import data from './placeholder-images.json';

type RawImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  isGif?: boolean;
};

export type ImagePlaceholder = RawImagePlaceholder & {
  isGif: boolean;
};

const placeholderData = data.placeholderImages as RawImagePlaceholder[];

const toPlaceholder = (placeholder: RawImagePlaceholder): ImagePlaceholder => {
  const isGifFromUrl = placeholder.imageUrl.toLowerCase().includes('.gif');

  return {
    ...placeholder,
    isGif: placeholder.isGif ?? isGifFromUrl,
  };
};

export const PlaceHolderImages: ImagePlaceholder[] = placeholderData.map(toPlaceholder);
