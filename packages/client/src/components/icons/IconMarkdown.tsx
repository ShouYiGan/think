import { Icon } from '@douyinfe/semi-ui';

export const IconMarkdown: React.FC<{ style?: React.CSSProperties }> = ({ style = {} }) => {
  return (
    <Icon
      style={style}
      svg={
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="29352"
          width="1em"
          height="1em"
        >
          <path
            d="M970.24 431.104h-53.76V215.552L700.416 0H215.552a107.52 107.52 0 0 0-107.52 108.032v323.072H53.76A53.76 53.76 0 0 0 0 484.864v323.584a53.76 53.76 0 0 0 53.76 53.76h54.272v53.76A108.032 108.032 0 0 0 215.552 1024h592.896a108.032 108.032 0 0 0 107.52-108.032v-53.76h53.76a53.76 53.76 0 0 0 54.272-53.76V484.864a53.76 53.76 0 0 0-53.76-53.76zM161.792 102.4a53.76 53.76 0 0 1 53.76-55.808h431.104V153.6a108.032 108.032 0 0 0 108.032 108.032H862.72v162.304H161.792V102.4z m700.416 806.4a53.76 53.76 0 0 1-53.76 53.76H215.552a53.76 53.76 0 0 1-53.76-53.76v-53.76h700.416v53.76z"
            fill="#1bb668"
            p-id="29353"
          ></path>
          <path
            d="M157 786.615V495.333h72.82l109.231 109.231 109.231-109.23h72.82v291.281h-72.82v-188.24l-109.23 109.23-109.231-109.23v188.24H157m509.744-291.282h109.23v145.641H867L721.359 804.821 575.718 640.974h91.026v-145.64z"
            fill="#FFFFFF"
            p-id="29354"
          ></path>
        </svg>
      }
    />
  );
};