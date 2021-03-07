import HomeLinkButton, { HomeLinkButtonProps } from './HomeLinkButton';

export default class VolunteerHomeLinkButton extends HomeLinkButton {
  backgroundColor: string;

  constructor(props: HomeLinkButtonProps) {
    super(props);

    this.backgroundColor = '#ff6961';
    this.icon = 'hand-heart';
  }
}

