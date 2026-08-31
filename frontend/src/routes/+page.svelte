<script>
  let { data } = $props();
  let messages = $state(data.messages);
  let newMessage = $state('');

  async function addMessage() {
    await fetch('http://localhost:8082/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newMessage })
    });
    newMessage = '';
    location.reload();
  }
</script>

<h1>Test Site</h1>
<input bind:value={newMessage} placeholder="Say something" />
<button onclick={addMessage}>Send</button>

<ul>
  {#each messages as msg}
    <li>{msg.text}</li>
  {/each}
</ul>