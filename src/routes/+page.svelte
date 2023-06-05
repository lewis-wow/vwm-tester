<script lang="ts">
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
  import type { Question } from '../types';
  import { shuffle } from '../utils/shuffle';

  /** @type {import('./$types').PageData} */
  export let data: { questions: Question[] };

  let shuffledQuestions = shuffle(data.questions);
  let currentQuestionIndex = 0;
  $: currentQuestion = shuffledQuestions[currentQuestionIndex];
  let isAnswered = false;

  $: shuffledAnswers = shuffle(currentQuestion.answers);
</script>

<Container>
  <Card>
    <p slot="title">{currentQuestion.question}</p>
    <div class="flex flex-col gap-4">
      {#each shuffledAnswers as { answer, correct }}
        <Button green={correct && isAnswered} on:click={() => (isAnswered = true)}>{answer}</Button>
      {/each}

      <div class="mt-4 w-full" class:invisible={!isAnswered}>
        <Button
          on:click={() => {
            isAnswered = false;
            currentQuestionIndex += 1;

            if (currentQuestionIndex === shuffledQuestions.length) {
              shuffledQuestions = shuffle(data.questions);
              currentQuestionIndex = 0;
            }
          }}>Další</Button
        >
      </div>
    </div>
  </Card>
  <ThemeSwitcher/>
</Container>
