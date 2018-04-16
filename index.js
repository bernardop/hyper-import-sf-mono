const fontFaces = `
  @font-face { font-family: "SF Mono"; font-weight: 200; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Light.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 200; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-LightItalic.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 400; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Regular.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 400; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-RegularItalic.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 500; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Medium.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 500; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-MediumItalic.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 600; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Semibold.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 600; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-SemiboldItalic.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 700; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Bold.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 700; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-BoldItalic.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 800; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Heavy.otf); }
  @font-face { font-family: "SF Mono"; font-weight: 800; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-HeavyItalic.otf); }
`

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    fontFamily: `"SF Mono", ${config.fontFamily}`,
    css: `${config.css || ''} ${fontFaces}`,
    termCSS: `${config.termCSS || ''} ${fontFaces}`
  });
}
