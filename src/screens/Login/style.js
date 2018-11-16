import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76ba95',
  },
});

const formStyles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  // inputs
  input: {
    height: 60,
    width: 230,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  // icons and input together
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  ImageStyle: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    alignItems: 'center',
  },
  // forgto password
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 45,
    width: 255,
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

module.exports = {
  styles,
  formStyles,
};
