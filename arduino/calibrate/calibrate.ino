#include <HX711.h>

#define pinDT  2
#define pinSCK  3
#define pinBotao 4

HX711 scale;

float medida = 0;

void setup() {
  Serial.begin(57600);

  scale.begin(pinDT, pinSCK);
  scale.set_scale(501111); 

  delay(2000);
  scale.tare();
  Serial.println("Balança Zerada");
}

void loop() {

  medida = scale.get_units(5);
  Serial.println(medida);

  scale.power_down(); 
  delay(1000); 
  scale.power_up();
}