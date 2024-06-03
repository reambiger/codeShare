import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import CodeBlockButtons from "../componnets/CodeBlockButtons";

const styles = stylex.create({
  page: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  header: {
    marginVertical: "7vh",
    color: "whitesmoke",
    fontSize:"xx-large",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
});

const LandingPage = () => {
  return (
    <div {...stylex.props(styles.page)}>
      <header {...stylex.props(styles.header)}>Choose code block</header>
      <CodeBlockButtons />
    </div>
  );
};

export default LandingPage;
