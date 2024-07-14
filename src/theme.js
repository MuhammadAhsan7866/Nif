
import "./Fonts"
import "@fontsource/space-grotesk"
import "@fontsource/inter"
import "@fontsource/space-grotesk/400.css"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/public-sans"
import { extendTheme } from '@chakra-ui/react'

export const mynewtheme = extendTheme({
    colors:{
        primary:"#258CEC ",
        secondry:"#6943FF"
      },
      components: {
        Tabs: {
          variants: {
            'line': {
              tab: {
                color: "#7B7A7A",
                borderbottom:"none",
               
                _selected: {
                  borderColor: '#0C1E21',
                  borderbottom:"2px solid",
                  color: "#0C1E21",
                  
                  
                  }
              }
            }
          },
        }
      },
      breakpoints: {
        sm: "480px",
        md: "768px",
        lg: "991px",
        xl: "1280px",
        xxl: "1440px",
        xxxl:"1660",
      },
      fonts: {
        heading: "ABCNormal, sans-serif",
        body: "ABCNormal, sans-serif",
      },
      
})
