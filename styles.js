import { StyleSheet } from 'react-native';

const colors = {
  primary: '#01071b',    // Azul Escuro Profissional
};

export const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },


  viewContainer: {
    backgroundColor: 'gray',
    width: 320,
    margin: 5
  },

  textoPrincipal: {
    fontSize: 17,
    fontWeight: 700
  },

  textoCifrao: {
    fontSize: 17,
    padding: 10,
    backgroundColor: 'yellow',
    marginTop: 2
  },

  textoInput: {
    fontSize: 17,
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 2
  },

  btn_blue: {
    backgroundColor: '#1885df',
    width: 320,
    margin: 5,
    paddingVertical: 10,
    borderRadius: 8
  },

  btn_blueText: {
    fontSize: 15,
    fontWeight: 700,
    textAlign: 'center',
    color: 'white'
  }

});