'use strict';

/**
 * @ngdoc service
 * @name iggApp.campaigns
 * @description
 * # campaigns
 * Service in the iggApp.
 */
angular.module('iggApp')
  .service('campaigns', function campaigns($q, $http, global) {

		//screw setting up a grunt proxy put an access allow Origin '*' on the endpoints you hand out ppl
		var staticData = {
			'response': [
				{
					'id': 835602,
					'slug': 'deepblue2-the-ultimate-bluetooth-speaker-designed-by-peachtree-audio',
					'created_at': '2014-06-23T13:45:04-07:00',
					'updated_at': '2014-08-22T11:55:31-07:00',
					'title': 'deepblue2 The Ultimate Bluetooth Speaker Designed by Peachtree Audio.',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1405956968/ugk1lbzftqocrilb6kvf.jpg',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1405956968/ugk1lbzftqocrilb6kvf.jpg',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1405956968/ugk1lbzftqocrilb6kvf.jpg',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1405956968/ugk1lbzftqocrilb6kvf.jpg'
					},
					'collected_funds': 312050,
					'goal': 63000,
					'funding_ends_at': '2014-08-22T23:59:59-07:00',
					'funding_started_at': '2014-07-21T08:58:02-07:00',
					'tagline': 'A 440-watt aptX® acoustic suspension Bluetooth Speaker with a massive 6.5\' woofer. The only small wireless speaker with the full range sound of large speakers.',
					'funding_days': null,
					'funding_type': 'flexible',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1405956968/ugk1lbzftqocrilb6kvf.jpg',
					'region_code': 'STTE_USWA',
					'region': 'Washington',
					'country_code_alpha_2': 'US',
					'country': 'United States',
					'city': 'Bellevue',
					'contributions_count': 982,
					'comments_count': 93,
					'updates_count': 4,
					'currency': {
						'iso_num': 840,
						'iso_code': 'USD',
						'symbol': '$'
					},
					'category': {
						'id': 27,
						'name': 'Technology',
						'text': 'Technology'
					}
				},
				{
					'id': 838279,
					'slug': 'stone-groundbreaking-collaborations--2',
					'created_at': '2014-06-25T14:05:37-07:00',
					'updated_at': '2014-08-22T12:15:40-07:00',
					'title': 'STONE GROUNDBREAKING COLLABORATIONS',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406397071/tkukv2nhwjj84qxaayya.png',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406397071/tkukv2nhwjj84qxaayya.png',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1406397071/tkukv2nhwjj84qxaayya.png',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1406397071/tkukv2nhwjj84qxaayya.png'
					},
					'collected_funds': 2315370,
					'goal': 1000000,
					'funding_ends_at': '2014-08-29T23:59:59-07:00',
					'funding_started_at': '2014-07-19T09:40:43-07:00',
					'tagline': 'Incredible rare beers from one of the world’s highest rated breweries.',
					'funding_days': null,
					'funding_type': 'flexible',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1406397071/tkukv2nhwjj84qxaayya.png',
					'region_code': 'STTE_USCA',
					'region': 'California',
					'country_code_alpha_2': 'US',
					'country': 'United States',
					'city': 'Escondido',
					'contributions_count': 12213,
					'comments_count': 231,
					'updates_count': 12,
					'currency': {
						'iso_num': 840,
						'iso_code': 'USD',
						'symbol': '$'
					},
					'category': {
						'id': 18,
						'name': 'Community',
						'text': 'Community'
					}
				},
				{
					'id': 812647,
					'slug': 'the-ultimate-paint-rack-by-massive-voodoo',
					'created_at': '2014-06-04T03:14:32-07:00',
					'updated_at': '2014-08-22T12:12:06-07:00',
					'title': 'The Ultimate Paint Rack - by Massive Voodoo',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406142976/n9zewlieu5i24enxrbdd.jpg',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406142976/n9zewlieu5i24enxrbdd.jpg',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1406142976/n9zewlieu5i24enxrbdd.jpg',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1406142976/n9zewlieu5i24enxrbdd.jpg'
					},
					'collected_funds': 39331,
					'goal': 5000,
					'funding_ends_at': '2014-08-23T23:59:59-07:00',
					'funding_started_at': '2014-07-24T05:13:10-07:00',
					'tagline': 'Now comes the next step in organizing your painting space and being mobile with your hobby - from passionate painters for passionate painters!',
					'funding_days': null,
					'funding_type': 'fixed',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1406142976/n9zewlieu5i24enxrbdd.jpg',
					'region_code': null,
					'region': '',
					'country_code_alpha_2': 'DE',
					'country': 'Germany',
					'city': 'Augsburg',
					'contributions_count': 538,
					'comments_count': 83,
					'updates_count': 15,
					'currency': {
						'iso_num': 978,
						'iso_code': 'EUR',
						'symbol': '€'
					},
					'category': {
						'id': 7,
						'name': 'Design',
						'text': 'Design'
					}
				},
				{
					'id': 840602,
					'slug': 'touchpico-turn-any-surface-into-a-touch-screen',
					'created_at': '2014-06-27T13:42:29-07:00',
					'updated_at': '2014-08-22T11:55:38-07:00',
					'title': 'TouchPico: Turn Any Surface Into A Touch Screen',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406360945/ntbplmicjnu94gbnxpj7.jpg',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406360945/ntbplmicjnu94gbnxpj7.jpg',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1406360945/ntbplmicjnu94gbnxpj7.jpg',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1406360945/ntbplmicjnu94gbnxpj7.jpg'
					},
					'collected_funds': 557820,
					'goal': 55000,
					'funding_ends_at': '2014-09-25T23:59:59-07:00',
					'funding_started_at': '2014-07-27T17:36:25-07:00',
					'tagline': 'A tiny handheld projector that turns any surface into a giant 80\' interactive touchscreen.',
					'funding_days': 30,
					'funding_type': 'flexible',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1406360945/ntbplmicjnu94gbnxpj7.jpg',
					'region_code': 'STTE_USCA',
					'region': 'California',
					'country_code_alpha_2': 'US',
					'country': 'United States',
					'city': 'San Francisco',
					'contributions_count': 1990,
					'comments_count': 301,
					'updates_count': 9,
					'currency': {
						'iso_num': 840,
						'iso_code': 'USD',
						'symbol': '$'
					},
					'category': {
						'id': 27,
						'name': 'Technology',
						'text': 'Technology'
					}
				},
				{
					'id': 777768,
					'slug': 'ritot-the-first-projection-watch',
					'created_at': '2014-05-05T13:58:45-07:00',
					'updated_at': '2014-08-22T12:10:31-07:00',
					'title': 'Ritot - the first projection watch.',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1404849376/uupaeln6orp1nney7pe7.jpg',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1404849376/uupaeln6orp1nney7pe7.jpg',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1404849376/uupaeln6orp1nney7pe7.jpg',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1404849376/uupaeln6orp1nney7pe7.jpg'
					},
					'collected_funds': 1039267,
					'goal': 50000,
					'funding_ends_at': '2014-08-31T23:59:59-07:00',
					'funding_started_at': '2014-07-07T00:02:57-07:00',
					'tagline': 'Inspired by future technologies we wanted to create a completely different, original timepiece. Ritot is the first projection watch.',
					'funding_days': null,
					'funding_type': 'flexible',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1404849376/uupaeln6orp1nney7pe7.jpg',
					'region_code': 'STTE_USCA',
					'region': 'California',
					'country_code_alpha_2': 'US',
					'country': 'United States',
					'city': 'San Francisco',
					'contributions_count': 6026,
					'comments_count': 2241,
					'updates_count': 15,
					'currency': {
						'iso_num': 840,
						'iso_code': 'USD',
						'symbol': '$'
					},
					'category': {
						'id': 27,
						'name': 'Technology',
						'text': 'Technology'
					}
				},
				{
					'id': 874830,
					'slug': 'isensor-hd-world-s-most-trusted-security-camera',
					'created_at': '2014-07-21T00:51:11-07:00',
					'updated_at': '2014-08-22T11:55:52-07:00',
					'title': 'iSensor HD: World\'s Most Trusted Security Camera',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1408723060/oc1cryyt3atizvk1bvap.png',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1408723060/oc1cryyt3atizvk1bvap.png',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1408723060/oc1cryyt3atizvk1bvap.png',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1408723060/oc1cryyt3atizvk1bvap.png'
					},
					'collected_funds': 189439,
					'goal': 1000,
					'funding_ends_at': '2014-08-30T23:59:59-07:00',
					'funding_started_at': '2014-07-31T09:38:17-07:00',
					'tagline': 'iSensor HD is the first WiFi home security IP cam with 256-bit encryption & 15 GB FREE cloud storage',
					'funding_days': 30,
					'funding_type': 'flexible',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1408723060/oc1cryyt3atizvk1bvap.png',
					'region_code': null,
					'region': '',
					'country_code_alpha_2': 'NL',
					'country': 'Netherlands',
					'city': 'Amsterdam',
					'contributions_count': 1320,
					'comments_count': 110,
					'updates_count': 9,
					'currency': {
						'iso_num': 840,
						'iso_code': 'USD',
						'symbol': '$'
					},
					'category': {
						'id': 27,
						'name': 'Technology',
						'text': 'Technology'
					}
				},
				{
					'id': 838188,
					'slug': 'lancez-la-revue-planches',
					'created_at': '2014-06-25T12:53:33-07:00',
					'updated_at': '2014-08-22T12:10:55-07:00',
					'title': 'Lancez la revue PLANCHES !',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1408592527/xfl9y3iepvfflf6uvwv2.png',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1408592527/xfl9y3iepvfflf6uvwv2.png',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1408592527/xfl9y3iepvfflf6uvwv2.png',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1408592527/xfl9y3iepvfflf6uvwv2.png'
					},
					'collected_funds': 8100,
					'goal': 20000,
					'funding_ends_at': '2014-10-04T23:59:59-07:00',
					'funding_started_at': '2014-08-20T21:39:40-07:00',
					'tagline': 'Lancez la production de la revue PLANCHES, une revue de bandes dessinées québécoises',
					'funding_days': 45,
					'funding_type': 'fixed',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1408592527/xfl9y3iepvfflf6uvwv2.png',
					'region_code': 'STTE_CAQC',
					'region': 'Quebec',
					'country_code_alpha_2': 'CA',
					'country': 'Canada',
					'city': 'Montréal',
					'contributions_count': 73,
					'comments_count': 0,
					'updates_count': 0,
					'currency': {
						'iso_num': 124,
						'iso_code': 'CAD',
						'symbol': '$'
					},
					'category': {
						'id': 5,
						'name': 'Comic',
						'text': 'Comic'
					}
				},
				{
					'id': 875432,
					'slug': 'patchnride-bicycle-flat-tire-repair',
					'created_at': '2014-07-21T11:07:59-07:00',
					'updated_at': '2014-08-22T12:11:17-07:00',
					'title': 'patchnride Bicycle Flat Tire Repair',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406038103/ioxq5z4a30jgf3rbyr9v.jpg',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406038103/ioxq5z4a30jgf3rbyr9v.jpg',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1406038103/ioxq5z4a30jgf3rbyr9v.jpg',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1406038103/ioxq5z4a30jgf3rbyr9v.jpg'
					},
					'collected_funds': 42244,
					'goal': 5000,
					'funding_ends_at': '2014-10-05T23:59:59-07:00',
					'funding_started_at': '2014-08-06T06:07:14-07:00',
					'tagline': 'patchnride is a simple tool that Permanently Repairs Bicycle Flat Tires. Easy. Convenient. Quick.',
					'funding_days': 60,
					'funding_type': 'flexible',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1406038103/ioxq5z4a30jgf3rbyr9v.jpg',
					'region_code': 'STTE_USFL',
					'region': 'Florida',
					'country_code_alpha_2': 'US',
					'country': 'United States',
					'city': 'Hollywood',
					'contributions_count': 1074,
					'comments_count': 26,
					'updates_count': 3,
					'currency': {
						'iso_num': 840,
						'iso_code': 'USD',
						'symbol': '$'
					},
					'category': {
						'id': 27,
						'name': 'Technology',
						'text': 'Technology'
					}
				},
				{
					'id': 813885,
					'slug': 'balmain-s-2014-head-of-the-charles-lta-para-rowing-project',
					'created_at': '2014-06-04T22:27:43-07:00',
					'updated_at': '2014-08-22T12:10:43-07:00',
					'title': 'Balmain\'s 2014 Head of the Charles LTA Para Rowing Project',
					'image_types': {
						'baseball_card': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406359897/opx4eiiogbxmuzh5u0xk.jpg',
						'small': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_standard/v1406359897/opx4eiiogbxmuzh5u0xk.jpg',
						'medium': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/t_iPhone_retina/v1406359897/opx4eiiogbxmuzh5u0xk.jpg',
						'original': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1406359897/opx4eiiogbxmuzh5u0xk.jpg'
					},
					'collected_funds': 9820,
					'goal': 7500,
					'funding_ends_at': '2014-08-24T23:59:59-07:00',
					'funding_started_at': '2014-06-25T04:50:23-07:00',
					'tagline': 'In 2013 we were the first Aussie Para 4+ to compete & win at the Head of the Charles regatta in Boston, USA.  We\'re back in 2014 to defend our title!',
					'funding_days': null,
					'funding_type': 'flexible',
					'baseball_card_image_url': 'http://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/c_fill,h_220,w_220/v1406359897/opx4eiiogbxmuzh5u0xk.jpg',
					'region_code': null,
					'region': '',
					'country_code_alpha_2': 'AU',
					'country': 'Australia',
					'city': 'Sydney',
					'contributions_count': 32,
					'comments_count': 0,
					'updates_count': 4,
					'currency': {
						'iso_num': 36,
						'iso_code': 'AUD',
						'symbol': '$'
					},
					'category': {
						'id': 26,
						'name': 'Sports',
						'text': 'Sports'
					}
				}
			],
			'count': 9,
			'pagination': {
				'previous': null,
				'next': null,
				'current': 1,
				'per_page': 30,
				'count': 9,
				'pages': 1
			}
		};

    //Here I will build my service to get the Campaigns API In a more robust app all my crud Services for this endpoint (and any data sanitizing) would go here
		var url = '/api/1/campaigns.json?api_token=' + global.getApiKey;
		function getCampaigns(){
			var deferred = $q.defer();
			if(staticData){
				deferred.resolve(staticData);
			}else{
				$http({
					method: 'GET',
					url: url
				}).success(function ( data ) {
						deferred.resolve( data );
					} ).error( function ( reason ) {
						deferred.reject( reason );
					} );
			}
			return deferred.promise;
		}

		return{
			get: function(){
				return getCampaigns();
			}
		};
  });
