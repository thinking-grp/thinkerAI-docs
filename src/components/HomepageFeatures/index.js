import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/thinker-ai_installing.svg').default,
    description: (
      <>
        thinkerAI has a custom installer for easy installation and use.
      </>
    ),
  },
  {
    title: 'Customize for yourself',
    Svg: require('@site/static/img/thinker-ai_customizing.svg').default,
    description: (
      <>
        thinkerAI supports GPT-2, BERT &#40;text classification only&#41;, but other Transformers models can be defined and used.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/thinker-ai_open-source.svg').default,
    description: (
      <>
        thinkerAI source code is available on GitHub.
        This allows bugs to be found and fixed quickly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
