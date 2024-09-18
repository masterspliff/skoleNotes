import { useState } from 'react';
import { ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import AnswerModal from '@/components/AnswerModal';



export default function Introduktion() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');

  // Function to open modal and set the answer text
  const handleAnswer = (answer: string) => {
    setCurrentAnswer(answer);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Introduktion til C#</ThemedText>
      
      <ThemedText style={styles.paragraph}>
        C# er et moderne, objektorienteret programmeringssprog, der bruges til mange typer applikationer. C# koden gemmes i almindelige tekstfiler med filtypenavnet ".cs". Sproget er designet til at være både effektivt og let at lære, og det bruges til alt fra desktop-applikationer til mobil-apps og spil.
      </ThemedText>

      <ThemedText style={styles.subTitle}>Tuborgklammer og Semikolon</ThemedText>
      <ThemedText style={styles.paragraph}>
        C# er, ligesom mange andre sprog som C++ og Java, et tuborgklammesprog. Det betyder, at kodeblokke indrammes med tuborgklammer `{}`. Hver instruktion i C# afsluttes med et semikolon `;`, hvilket fortæller kompileren, at denne instruktion er færdig.
      </ThemedText>
      <ThemedText style={styles.codeBlock}>
      {`using System;\nnamespace MinApp\n{\n\tclass Program\n\t{\n\t\tstatic void Main(string[] args)\n\t\t{\n\t\t\tConsole.WriteLine("Hello, World!");\n\t\t}\n\t}\n}`}
     </ThemedText>

      <ThemedText style={styles.subTitle}>Store og små bogstaver</ThemedText>
      <ThemedText style={styles.paragraph}>
        C# er forskellig på store og små bogstaver. Variabler og metoder som “a” og “A” vil blive betragtet som forskellige. Det samme gælder for metoder og klasser, hvor "metode" og "Metode" er forskellige.
      </ThemedText>
      <ThemedText style={styles.codeBlock}>
        {`int a = 10;\nint A = 20;\n\nvoid metode() { }\nvoid Metode() { }`}
      </ThemedText>

      <ThemedText style={styles.subTitle}>Alt er typer i C#</ThemedText>
      <ThemedText style={styles.paragraph}>
        I C# er alt baseret på typer. Der findes seks grundlæggende typer: Klasser, Strukturer, Poster (records), Enumerations (relaterede konstanter), Interfaces og Delegates. Disse typer fungerer som skabeloner, der beskriver, hvordan objekter vil opføre sig i kode.
      </ThemedText>

      <ThemedText style={styles.subTitle}>Variabler og Simple Typer</ThemedText>
      <ThemedText style={styles.paragraph}>
        C# har en række indbyggede typer, som bruges til at lagre data i variabler. For eksempel kan du oprette heltal (int), flydende kommatal (double), tekststrenge (string), og boolean værdier (bool). Disse variabler oprettes ved at angive typen efterfulgt af et navn:
      </ThemedText>
      <ThemedText style={styles.subTitle}>Variabler og Datatyper</ThemedText>
      <ThemedText style={styles.paragraph}>
        C# er et stærkt typet sprog, hvilket betyder, at alle variabler skal have en defineret datatype. De mest almindelige typer inkluderer:
      </ThemedText>
      <ThemedText style={styles.bulletPoint}>• int: Heltal</ThemedText>
      <ThemedText style={styles.bulletPoint}>• double: Decimaltal</ThemedText>
      <ThemedText style={styles.bulletPoint}>• bool: Sand/falsk</ThemedText>
      <ThemedText style={styles.bulletPoint}>• string: Tekst</ThemedText>
      <ThemedText style={styles.codeBlock}>
        {`int a = 10;\nstring navn = "John";\nbool erVoksen = true;`}
      </ThemedText>

      <ThemedText style={styles.subTitle}>Figur: Kompilering af C#</ThemedText>
      <Image source={require('@/assets/images/Csharp_compiler_flow.png')} style={styles.image} />
      <ThemedText style={styles.caption}>Figur 2: Fra C# til mellem-kode til binær eksekverbar kode</ThemedText>

      <ThemedText style={styles.subTitle}>Hierarki af typer</ThemedText>
      <ThemedText style={styles.paragraph}>
      Alle typer i C# er organiseret i namespaces. Et namespace fungerer som en mappe, hvor typerne opbevares for at undgå konflikter med samme navn. For eksempel findes klassen `List&lt;T&gt;` under `System.Collections.Generic`, som ligger under `System`.
      </ThemedText>

      <ThemedText style={styles.subTitle}>Simple Metoder</ThemedText>
      <ThemedText style={styles.paragraph}>
        Metoder bruges til at genbruge kode og udføre specifikke opgaver. De kan returnere en værdi (f.eks. tekst, tal) eller være void (ingen returværdi). Her er et eksempel på en metode, der tager to tal og returnerer deres sum:
      </ThemedText>
      <ThemedText style={styles.codeBlock}>
        {`public int LægSammen(int a, int b) {\n return a + b;\n}`}
      </ThemedText>


      <Collapsible title="Gode links">
        <ExternalLink href="https://github.com/oleeriksen">
          <ThemedText type="link">Oles github</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://visualstudio.microsoft.com/vs/community/">
          <ThemedText type="link">IDE til Windows</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://www.jetbrains.com/rider/">
          <ThemedText type="link">IDE til Mac-brugere</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://code.visualstudio.com/docs/csharp/get-started">
          <ThemedText type="link">Hvis du absolut vil bruge VisualStudio Code</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Opgaver">
        <ThemedText style={styles.paragraph}>
          1. Skriv et program som indlæser 2 tal (brug typen int og funktionen int.Parse(string) til at konvertere en streng til et tal) og udskriver summen.
        </ThemedText>
        <Pressable style={styles.button} onPress={() => handleAnswer('Løsning: Brug int.Parse(string) for at indlæse tal, og udskriv summen med Console.WriteLine(a + b);')}>
          <ThemedText style={styles.buttonText}>Vis svar</ThemedText>
        </Pressable>

        <ThemedText style={styles.paragraph}>
          2. Skriv et program som indlæser et tal og udskriver om tallet er lige eller ulige (brug funktionen int.IsEvenInteger(int) til at bestemme om et tal er lige eller ulige. Funktionens returtype er bool. En variable af denne type har værdien true eller false.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          3. Skriv et program som indlæser et tal og derefter udskriver summen af tallene fra 1 og op til og med tallet. Så fx på input 5, skal programmet udskrive 1+2+3+4+5 = 15.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          4. Skriv et program som indlæser 2 tal og en regne operator ('+', '-', '*' eller '/') og udfører operationen på de to tal. Til at repræsentere operatoren bruges type char, som er netop et tegn.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          5. Her er et eksempel på hvordan man kan bruge et “dobbelt for loop” til at printe en tabel af *:
        </ThemedText>
        <ThemedText style={styles.codeBlock}>
          {`public class Opgave5 {\n  public void Run() {\n    for (int i = 0; i < 10; i++) {\n      string output = ""; \n      for (int j = 0; j < 10; j++) {\n        output = output + "*";\n      }\n      Console.WriteLine(output);\n    }\n  }\n}`}
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Outputtet i terminalen er:
          {"\n"}**********{"\n"}**********{"\n"}**********{"\n"}**********{"\n"}**********{"\n"}**********{"\n"}**********{"\n"}**********{"\n"}**********{"\n"}**********
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Læs koden og forstå hvordan den virker. Lav nye udgaver af programmet der printer følgende billeder:
        </ThemedText>
        <ThemedText style={styles.bulletPoint}>a)</ThemedText>
        <ThemedText style={styles.codeBlock}>
          {"**********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*"}
        </ThemedText>
        <ThemedText style={styles.bulletPoint}>b)</ThemedText>
        <ThemedText style={styles.codeBlock}>
          {"*\n**\n***\n****\n*****\n******\n*******\n********\n*********"}
        </ThemedText>
        <ThemedText style={styles.bulletPoint}>c)</ThemedText>
        <ThemedText style={styles.codeBlock}>
          {"        *\n       **\n      ***\n     ****\n    *****\n   ******\n  *******\n ********\n*********"}
        </ThemedText>
        <ThemedText style={styles.bulletPoint}>d)</ThemedText>
        <ThemedText style={styles.codeBlock}>
          {"**********\n *********\n  ********\n   *******\n    ******\n     *****\n      ****\n       ***\n        **\n         *"}
        </ThemedText>
    </Collapsible>

    <AnswerModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        answer={currentAnswer}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
  },
  codeBlock: {
    fontFamily: 'monospace',
    backgroundColor: '#8a8787',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  caption: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 24,
  },
  bulletPoint: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});