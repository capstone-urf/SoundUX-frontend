import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
  },
  components: {
    Link: {},
  },
  layerStyles: {
  },
  styles: {
    global: {
      body: {
        lineHeight: 'normal',
        fontFamily: 'normal',
        background: 'system.background-blue-grey',
      },
      hr: {
        opacity: '1 !important',
      },
      '.chakra-button': {
        outline: 'none !important',
        outlineOffset: '0 !important',
      },
      '.chakra-table': {
        borderCollapse: 'collapse',
      },
      '.chakra-table th': {
        p: '8px 15px',
        color: 'system.text-grey',
        fontSize: '14px',
        fontWeight: '500',
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'system.border',
      },
      '.chakra-table td': {
        p: '10px 15px',
        color: 'system.button-black',
        fontSize: '14px',
        fontWeight: '500',
        borderTop: 'none !important',
        borderLeft: '1px solid',
        borderRight: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'system.border',
      },
      '.student-register': {
        '.select-block': {
          fontSize: '16px !important',
          fontWeight: 400,
        },
        '.select-block:invalid': {
          fontSize: '14px !important',
          fontWeight: 400,
        },
      },
      '.worksheet-create': {
        '.select-block': {
          color: 'fancy.primary-blue',
          border: '2px solid',
          borderColor: 'fancy.primary-blue',
          backgroundColor: 'app.app-select-primary-blue',
        },
        '.select-block:invalid': {
          color: 'system.medium-blue-grey',
          border: '1px solid',
          borderColor: 'system.border',
          backgroundColor: 'transparent',
        },
      },
      '.problem-manage': {
        input: {
          h: 'fit-content',
          p: '12px 16px',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: 'normal',
          borderRadius: '3px !important',
          border: '1px solid',
          borderColor: 'system.border !important',
          bgColor: 'system.fill-white !important',
          outline: 'none !important',
        },
        'input:active, input:focus': {
          border: '1px solid !important',
          borderColor: 'system.medium-grey !important',
          outline: 'none !important',
          outlineOffset: 'none !important',
        },
        'input::placeholder': {
          color: 'system.medium-grey',
        },
        select: {
          h: 'fit-content',
          p: '12px 16px',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: 'normal',
          borderRadius: '3px !important',
          border: '1px solid',
          borderColor: 'system.border !important',
          bgColor: 'system.fill-white !important',
          _invalid: {
            color: 'system.medium-grey',
          },
        },
        button: {
          flexShrink: 0,
          h: '43px',
          p: '12px 16px',
          color: 'system.fill-white',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: 'normal',
          borderRadius: '3px !important',
          bgColor: 'system.button-black',
          _hover: {
            bgColor: 'system.medium-blue-grey',
          },
          _invalid: {
            bgColor: 'system.button-disable',
          },
        },
      },
    },
  },
});

export default customTheme;