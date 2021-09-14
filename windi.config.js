import { defineConfig } from 'windicss/helpers'
import forms from 'windicss/plugin/forms'
import clamp from 'windicss/plugin/line-clamp'
export default defineConfig({
  theme: {
    padding: {
      sx: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
    margin: {
      sx: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      auto: 'auto',
    },
  },
  plugins: [forms, clamp],
  shortcuts: {
    'abs-tl': 'absolute top-0 left-0',
    'abs-tr': 'absolute top-0 right-0',
    'abs-b': 'absolute bottom-0 left-0 right-0',
    'abs-bl': 'absolute bottom-0 left-0',
    'abs-br': 'absolute bottom-0 right-0',
  },
})
