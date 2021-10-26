module.exports = {
  mode: 'jit',
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': '0px',
      // => @media (min-width: 0px) { ... }

      'tablet': '650px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-1': "url(../images/hero-bg-sm.png)",
        'hero-2': "url(../images/hero.svg)",
        'curso-1': "url(../images/mkt-conteudo.png)",
        'curso-2': "url(../images/financas-bg.jpg)",
        'curso-3': "url(../images/logistica-bg.jpg)",
        'curso-4': "url(../images/rh-bg.jpg)",
        'equipe': "url(../images/equipe-bg.png)",
        'scarlet': "url(../images/scarlet.jpg)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scale(1.01)' },
          '50%': { transform: 'scale(0.99)' },
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
    },
    fontFamily: {
      'main': ["Quicksand"],
      'sub': ['"Playfair Display"'],
    },
    backgroundSize: {
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '75%': '75%',
      '90%': '90%',
      '100%': '100%',
      '110%': '110%',
      '150%': '150%',
      '16': '4rem',
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },
    backgroundPosition: {
      'bottom-4': 'center bottom 4em',
      'bottom-5': 'center bottom 5em',
      'bottom-6': 'center bottom 6em',
      'rb': 'right bottom 7em',
      'rt': 'right top 3em',
      'rt-1': 'right top 6em',
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
