import Colors from '@/theme/constants/colors';
import Dimensions from '@/theme/constants/dimensions';
import Mixins from '@/theme/utils/Mixins.utils';

const THEME = {
  colors: {
    brand: Colors.brand,
    brandComplimentary: Colors.complimentary,
    feedback: Colors.feedback,
    ui: Colors.ui,
  },
  dimensions: {
    fontSizes: Dimensions.fontSizes,
    headingSizes: Dimensions.headingSizes,
    lineHeights: Dimensions.lineHeights,
    paddings: Dimensions.paddings,
  },
  utils: {
    mixins: {
      padY: Mixins.padY,
      padX: Mixins.padX,
      getEmSize: Mixins.getEmSize,
      getStyledBorder: Mixins.getStyledBorder,
    },
  },
};

export default THEME;
