module('Core tests');

test('replace with loop', function() {
	expect(1);
	before_and_after_replace({ loop: true });
});

test('replace without loop', function() {
	expect(1);
	before_and_after_replace({ loop: false });
});

function before_and_after_replace(options) {
	var simple = $('#simple'),
		replacement = simple.html(),
		expected = null;
	
	simple.owlCarousel(options);
	
	expected = simple.html();
	
	simple.trigger('replace.owl.carousel', [ replacement ]);
	simple.trigger('refresh.owl.carousel');
	
	equal(simple.html(), expected, 'Inner HTML before and after replace equals.');
}

test('remove with loop', function() {
	expect(3);
	
	before_and_after_remove({ loop: true });
});

test('remove without loop', function() {
	expect(3);
	
	before_and_after_remove({ loop: false });
});

function before_and_after_remove(options) {
	var simple = $('#simple'),
		one = simple.clone().removeAttr('id').insertAfter('#simple'),
		two = one.clone().insertAfter(one),
		all = two.clone().insertAfter(two);
	
	one.children(':eq(0)').remove();
	two.children(':eq(0),:eq(2)').remove();
	all.children().remove();

	simple.owlCarousel(options);
	one.owlCarousel(options);
	two.owlCarousel(options);
	all.owlCarousel(options);
	
	simple.trigger('remove.owl.carousel', [ 0 ]);
	simple.trigger('refresh.owl.carousel');
	
	equal(simple.html(), one.html(), 'Inner HTML before and after remove one equals.');
	
	simple.trigger('remove.owl.carousel', [ 1 ]);
	s