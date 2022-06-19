// INCLUSÃO DE BIBLIOTECAS
#include <HX711.h>
#include <PushButton.h>

// DEFINIÇÕES DE PINOS
#define pinDT  2
#define pinSCK  3
#define pinBotao 4

// DEFINIÇÕES
#define pesoMin 0.010
#define pesoMax 30.0

#define escala 501111.0f

HX711 scale;
PushButton botao(pinBotao);

float medida=0;
int contador = 0;

void setup() {
  Serial.begin(57600);

  scale.begin(pinDT, pinSCK);
  scale.set_scale(escala); 

  delay(2000);
  scale.tare(); 
  Serial.println("Setup Finalizado!");
}

void loop() {
  botao.button_loop();
  Serial.println(contador);
  if(botao.pressed()|| (contador == 5) ){ 
    
    scale.power_up();
    
    medida = scale.get_units(5);
    
    if (medida <= pesoMin ){
      scale.tare();
      medida = 0;
      Serial.println("Tara Configurada!");
    } else if ( medida >= pesoMax ){
      scale.tare(); 
      medida = 0;
      Serial.println("Tara Configurada!");
    } else {
      Serial.println(medida,3);
    }
    scale.power_down();
  }

  delay(1000);
  contador++;

  if (contador == 6 ) {
    contador = contador - 5; 
  }
  
}