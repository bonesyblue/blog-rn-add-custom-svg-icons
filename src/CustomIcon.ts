import { createIconSetFromFontello } from 'react-native-vector-icons';
import customIconConfig from './config/custom-icon-config.json';

enum CustomIconName {
  Laptop = 'laptop-24px',
  Smartphone = 'smartphone-24px',
  Watch = 'watch-24px',
}

const CustomIcon = createIconSetFromFontello(customIconConfig);

export { CustomIcon, CustomIconName };

