/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { jsx } from "theme-ui";
import { Editor, Inputs, styled, codegen, theme } from "@compai/css-gui";
import { Logo } from "@compai/logo";
import { initialStyles } from "./initial-styles";
import { defaultTheme } from "./default-theme";

export default function Demo() {
  const [styles, setStyles] = React.useState(initialStyles);
  const id = React.useId();

  return (
    <>
      <header sx={{ px: 4, py: 2 }}>
        <a
          href="https://components.ai/open-source/css-gui"
          sx={{
            color: theme.colors.muted,
            textDecoration: "none",
            fontWeight: 500,
            display: "flex",
            ":hover": {
              color: theme.colors.primary
            }
          }}
        >
          <Logo seed={id} sx={{ mr: 2 }} />
          CSS GUI Demo
        </a>
      </header>
      <div
        className="full-bleed"
        sx={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          borderTopWidth: "thin",
          borderTopStyle: "solid",
          borderColor: theme.colors.border
        }}
      >
        <Editor styles={styles} onChange={setStyles} theme={defaultTheme}>
          <div
            sx={{
              display: "grid",
              gap: ".5rem",
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              borderColor: "border",
              p: 4
            }}
          >
            <h3 sx={{ fontSize: 2, my: 0 }}>Typography</h3>
            <Inputs.FontFamily />
            <Inputs.FontSize />
            <Inputs.LineHeight />
            <Inputs.TextAlign />
            <Inputs.FontStyle />
            <Inputs.FontStretch />
            <h3 sx={{ fontSize: 2, mt: 4, mb: 0 }}>Colors</h3>
            <div sx={{ display: "flex" }}>
              <div sx={{ mr: 2 }}>
                <Inputs.Color />
              </div>
              <div>
                <Inputs.BackgroundColor />
              </div>
            </div>
            <h3 sx={{ fontSize: 2, mt: 4, mb: 0 }}>Borders</h3>
            <Inputs.BorderRadius />
            <Inputs.BorderWidth />
            <Inputs.BorderStyle />
            <Inputs.BorderColor />
            <Inputs.BorderImageSource />
            <Inputs.BorderImageSlice />
            <Inputs.BorderImageOutset />
            <Inputs.BorderImageRepeat />
            <Inputs.BorderImageWidth />

            <h3 sx={{ fontSize: 2, mt: 4, mb: 0 }}>Spacing</h3>
            <Inputs.Margin />
            <Inputs.Padding />
            <h3 sx={{ fontSize: 2, mt: 4, mb: 0 }}>Size</h3>
            <Inputs.Width />
            <Inputs.MinWidth />
            <Inputs.MaxWidth />
            <Inputs.Height />
            <Inputs.MinHeight />
            <Inputs.MaxHeight />
          </div>
        </Editor>
        <section>
          <styled.p styles={styles}>
            “The parameters comprise sequences which are theoretically infinite
            but limits are, of course, set to them in practice. There is an
            upward limit to size and certainly a downward one... Within these
            sequences there are reasonable bounds; extremes set by technical and
            functional experience”
            <br /> <br />
            <em>
              In{" "}
              <a
                href="https://www.lars-mueller-publishers.com/designing-programmes-0"
                style={{ color: styles.color }}
              >
                Designing Programmes
              </a>{" "}
              by Karl Gerstner
            </em>
          </styled.p>
        </section>
      </div>
      <div className="full-bleed">
        <pre
          sx={{
            p: [2, 3, 5],
            borderTop: "thin solid",
            borderColor: "border",
            width: "100%",
            fontSize: 3
          }}
        >
          {codegen.css(styles)}
        </pre>
      </div>
    </>
  );
}
