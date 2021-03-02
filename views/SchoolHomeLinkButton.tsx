import HomeLinkButton, { HomeLinkButtonProps } from './HomeLinkButton';

export default class SchoolHomeLinkButton extends HomeLinkButton {
  title: string;
  uri: string;
  icon: string;
  backgroundColor: string;

  constructor(props: SchoolHomeLinkButtonProps) {
    const completeProps: HomeLinkButtonProps = {
      title: props.title,
      uri: props.uri,
      icon: 'school',
      backgroundColor: '#77dd77'
    }
    super(completeProps);

    this.title = completeProps.title;
    this.uri = completeProps.uri;
    this.icon = completeProps.icon;
    this.backgroundColor = completeProps.backgroundColor;
  }
}

interface SchoolHomeLinkButtonProps {
  title: string;
  uri: string
}

