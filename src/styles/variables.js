export const colorVars = {
  $transparent: 'transparent',
  $white: '#ffffff',
  $black: '#000000',

  $blue: '#0d6efd',
  $indigo: '#6610f2',
  $purple: '#6f42c1',
  $pink: '#d63384',
  $red: '#dc3545',
  $orange: '#fd7e14',
  $yellow: '#ffc107',
  $green: '#28a745',
  $teal: '#20c997',
  $cyan: '#17a2b8',

  $gray100: '#F6F7FA',
  $gray200: '#E2E7F0',
  $gray300: '#BFC9D8',
  $gray400: '#A0ACBF',
  $gray500: '#768397',
  $gray600: '#586272',
  $gray700: '#495057',
  $gray800: '#343a40',
  $gray900: '#212529'
}

export const themeVars = {
  $primary: `${colorVars.$blue}`,
  $secondary: `${colorVars.$gray600}`,
  $success: `${colorVars.$green}`,
  $info: `${colorVars.$cyan}`,
  $warning: `${colorVars.$yellow}`,
  $danger: `${colorVars.$red}`,
  $light: `${colorVars.$gray100}`,
  $dark: `${colorVars.$gray800}`
}

export const fontVars = {
  $font_color: colorVars.$gray800,
  $font_size: '1rem',
  $font_size_xs: '0.75rem',
  $font_size_sm: '0.875rem',
  $font_size_lg: '1.25rem'
}

export const spacingVars_numbers = {
  $spacing_0: 0
}

export const spacingVars = {
  $spacing_extra_extra_small: '.125rem',
  $spacing_extra_small: '.25rem',
  $spacing_small: '.5rem',
  $spacing_medium: '0.75rem',
  $spacing: '1rem',
  $spacing_large: '2rem',
  $spacing_extra_large: '4rem',
  $spacing_extra_extra_large: '8rem',
  $spacing_extra_extra_extra_large: '16rem'
}

export const borderVars = {
  $border: `1px solid ${colorVars.$gray300}`,
  $border_color: colorVars.$gray300,

  $border_radius: '0.25rem',
  $border_radius_sm: '0.2rem',
  $border_radius_lg: '0.3rem'
}

export const vars = {
  ...colorVars,
  ...spacingVars_numbers,
  ...spacingVars,
  ...themeVars,
  ...fontVars,
  ...borderVars
}

export default vars
