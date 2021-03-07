import HomeLinkButton, { HomeLinkButtonProps } from './HomeLinkButton';

export default class SchoolHomeLinkButton extends HomeLinkButton {
  constructor(props: HomeLinkButtonProps) {
    super(props);

    this.icon = 'school';
    this.backgroundColor = '#77dd77';
  }
}

