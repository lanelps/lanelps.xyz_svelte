<script lang="ts">
	import { parseFormData } from '~utils/helpers';

	let className = '';
	export { className as class };

	let submitting = false;
	let submitted = false;
	let formError = false;

	const setFormError = (val: boolean) => {
		formError = val;
	};

	const setSubmitted = (val: boolean) => {
		submitted = val;
	};

	const timedFalseState = (setFunc: Function, time: number) => {
		const timeout = setTimeout(() => {
			setFunc(false);
			clearTimeout(timeout);
		}, time);
	};

	$: if (submitted) timedFalseState(setSubmitted, 3000);
	$: if (formError) timedFalseState(setFormError, 3000);

	const handleSubmit = async (event: Event) => {
		submitting = true;

		const formEl = event.target as HTMLFormElement;

		const formData = parseFormData(new FormData(formEl));

		try {
			const response = await fetch(formEl.action, {
				method: 'POST',
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				submitting = false;
				formError = true;

				return;
			}

			submitting = false;
			submitted = true;
			formEl.reset();
		} catch (error) {
			console.log(`error`, error);
			formError = true;
			formEl.reset();
		}
	};
</script>

<form
	class={`${className} flex flex-col -mt-3 font-main text-main`}
	on:submit|preventDefault={handleSubmit}
	action="/api/send-grid"
>
	<input
		type="text"
		name="name"
		placeholder="Name*"
		class="py-3 border-b focus:outline-none disabled:opacity-50 transition-opacity"
		disabled={submitting || formError}
	/>
	<input
		type="email"
		name="email"
		placeholder="Email*"
		class="py-3 border-b focus:outline-none disabled:opacity-50 transition-opacity"
		disabled={submitting || formError}
	/>
	<input
		type="text"
		name="subject"
		placeholder="Subject*"
		class="py-3 border-b focus:outline-none disabled:opacity-50 transition-opacity"
		disabled={submitting || formError}
	/>
	<textarea
		name="message"
		placeholder="Message*"
		class="py-3 border-b min-h-[20vh] focus:outline-none disabled:opacity-50 transition-opacity"
		disabled={submitting || formError}
	/>
	<button
		type="submit"
		class="w-max py-3 disabled:opacity-50 transition-opacity"
		disabled={submitting || submitted || formError}
	>
		{#if submitting && !submitted}
			Submitting...
		{:else if !submitting && submitted}
			Submitted!
		{:else if formError}
			Error
		{:else}
			Send
		{/if}
	</button>
</form>
