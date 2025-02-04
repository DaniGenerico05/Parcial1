import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const NFLGamePassApp = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '', phone: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    if (key === 'id' || key === 'phone') {
      if (!/^[0-9]*$/.test(value)) return;
    }
    setFormData({ ...formData, [key]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.id) newErrors.id = 'ID es requerido';
    if (!formData.name) newErrors.name = 'Nombre es requerido';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone) newErrors.phone = 'Teléfono es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmittedData(formData);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={{ width: 200, height: 100 }} source={require("./assets/nfl.jpg")} />
      <Text style={styles.title}>Registro NFL Game Pass</Text>
      <TextInput style={styles.input} placeholder="ID" keyboardType="phone-pad" onChangeText={(text) => handleChange('id', text)} value={formData.id} />
      {errors.id && <Text style={styles.error}>{errors.id}</Text>}
      <TextInput style={styles.input} placeholder="Nombre" onChangeText={(text) => handleChange('name', text)} value={formData.name} />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={(text) => handleChange('email', text)} value={formData.email} />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" onChangeText={(text) => handleChange('phone', text)} value={formData.phone} />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
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
  error: { color: 'red', marginBottom: 10 },
  result: { marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }
});

export default NFLGamePassApp;
