module.exports = {
  mode: 'jit',
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-1': "url(../images/hero-bg-sm.png)",
        'hero-2': "url(../images/hero.svg)",
        'curso-1': "url(../images/mkt-conteudo.png)",
        'curso-2': "url(../images/logistica-bg.jpg)",
        'curso-3': "url(../images/rh-bg.jpg)",
        'curso-4': "url(../images/hero.svg)",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
