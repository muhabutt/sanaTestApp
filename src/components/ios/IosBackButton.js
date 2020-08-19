import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';

const IosBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.pop()}
      style={[
        styles.greenBackground,
        styles.borderWhite,
        styles.circleButton,
        styles.ml20,
        styles.justifyContentCenter,
        styles.alignItemCenter,
      ]}>
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        size={40}
        color={'#75B2B7'}
      />
    </TouchableOpacity>
  );
};

export default IosBackButton;
