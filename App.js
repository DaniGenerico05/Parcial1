import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';

const NFLGamePassApp = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '', phone: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <View style={styles.container}>

      <Image 
      style={{width:200, height:100}}
      source={require("./assets/nfl.jpg")}/>
      
      <Text style={styles.title}>Registro NFL Game Pass</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={(text) => handleChange('id', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(text) => handleChange('name', text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        onChangeText={(text) => handleChange('phone', text)}
      />
      <Button title="Registrar" onPress={handleSubmit} />
      {submittedData && (
        <View style={styles.result}>
          <Text>ID: {submittedData.id}</Text>
          <Text>Nombre: {submittedData.name}</Text>
          <Text>Email: {submittedData.email}</Text>
          <Text>Teléfono: {submittedData.phone}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  result: { marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }
});

export default NFLGamePassApp;
