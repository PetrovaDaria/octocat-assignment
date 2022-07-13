import {css} from '@emotion/css';
import {TTheme} from "../../styles";

export const layoutStyle = (theme: TTheme) => css({
  background: theme.mainBackground,
  padding: '20px calc(20%)',
  height: '100vh'
});
