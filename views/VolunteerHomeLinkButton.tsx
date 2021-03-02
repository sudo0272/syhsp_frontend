import HomeLinkButton, { HomeLinkButtonProps } from './HomeLinkButton';

export default class VolunteerHomeLinkButton extends HomeLinkButton {
  title: string;
  uri: string;
  icon: string;
  backgroundColor: string;

  constructor(props: VolunteerHomeLinkButtonProps) {
    const completeProps: HomeLinkButtonProps = {
      title: props.title,
      uri: props.uri,
      icon: 'hand-heart',
      backgroundColor: '#ff6961'
    }
    super(completeProps);

    this.title = completeProps.title;
    this.uri = completeProps.uri;
    this.icon = completeProps.icon;
    this.backgroundColor = completeProps.backgroundColor;
  }
}

interface VolunteerHomeLinkButtonProps {
  title: string;
  uri: string;
}
