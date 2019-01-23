/ *��
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 *����Sizzle.js
 * http://sizzlejs.com/
 *
 *��Ȩ����2005,2014 jQuery Foundation��Inc��������������
 *����MIT���֤����
 * http://jquery.org/license
 *
 *���ڣ�2015-04-28T16��01Z
 * /

�����ܣ�ȫ�򣬹�����{

	if��typeof module ===��object��&& typeof module.exports ===��object����{
		//������CommonJS������CommonJS�Ļ�����������һ����ȷ�ġ����ڡ�
		//���ڣ�ִ�й�������ȡjQuery��
		//����û�д����ĵ����ġ����ڡ��Ļ���
		//������Node.js��������������Ϊmodule.exports��
		//��ǿ���˴���һ�������ġ����ڡ��ı�Ҫ�ԡ�
		//����var jQuery = require����jquery������window��;
		//�й���ϸ��Ϣ������ģ�14549Ʊ��
		module.exports = global.document��
			������ȫ����ʵ����
			function��w��{
				if����w.document��{
					�׳��´��󣨡�jQuery��Ҫһ�����ĵ��Ĵ��ڡ���;
				}
				������w��;
			};
	} else {
		������ȫ��;
	}

//�����δ���崰�ڣ��봫�ݴ���
}��typeof window��==��undefined����window��this��function��window��noGlobal��{

//֧�֣�Firefox 18+
//�������ϸ�ģʽ�£�����ASP.NET�������ڵļ�����
//��ջͨ��arguments.caller.callee��Firefox����if
//����ͼ׷�١�ʹ���ϸ񡱵ĵ�����������13335��
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



VAR
	//ʹ�ô��ڲ�����ɳ�䣩��Ӧ��ʹ����ȷ���ĵ�
	document = window.document��

	version =��2.1.4����

	//����jQuery�ı��ظ���
	jQuery = function��selector��context��{
		// jQuery����ʵ����ֻ��init���캯��'enhanced'
		//���������jQuery������Ҫinit�������������ֻ�����׳�����
		�����µ�jQuery.fn.init��selector��context��;
	}��

	//֧�֣�Android <4.1
	//ȷ�������޼�BOM��NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g��

	//ƥ�������ַ����Խ����շ廯
	rmsPrefix = / ^  -  ms- /��
	rdashAlpha = /  - ��[\ da-z]��/ gi��

	//��jQuery.camelCase����replace�����Ļص�
	fcamelCase = function��all��letter��{
		return letter.toUpperCase����;
	};

jQuery.fn = jQuery.prototype = {
	//����ʹ�õ�jQuery�ĵ�ǰ�汾
	jquery���汾��

	���캯����jQuery��

	//�Կ�ѡ������ͷ
	ѡ������������

	// jQuery�����Ĭ�ϳ���Ϊ0
	���ȣ�0��

	toArray��function����{
		return slice.call��this��;
	}��

	//��ȡƥ��Ԫ�ؼ�OR�еĵ�N��Ԫ��
	//������ƥ���Ԫ�ؼ���Ϊ�ɾ�����
	get��function��num��{
		return num��= null��

			//ֻ���ؼ����е�һ��Ԫ��
			��num <0��this [num + this.length]��this [num]����

			//���ظɾ������е�����Ԫ��
			slice.call��this��;
	}��

	//��ȡһϵ��Ԫ�ز����������ջ
	//�������µ�ƥ��Ԫ�ؼ���
	pushStack��function��elems��{

		//����һ���µ�jQueryƥ��Ԫ�ؼ�
		var ret = jQuery.merge��this.constructor������elems��;

		//���ɶ�����ӵ���ջ�У���Ϊ�ο���
		ret.prevObject = this;
		ret.context = this.context;

		//�������γɵ�Ԫ�ؼ�
		����;
	}��

	//��ƥ�伯�е�ÿ��Ԫ��ִ�лص���
	//��������ʹ��args����Բ����������Ӵ���������
	//�����ڲ�ʹ�á���
	each��function��callback��args��{
		return jQuery.each��this��callback��args��;
	}��

	map��function��callback��{
		return this.pushStack��jQuery.map��this��function��elem��i��{
			return callback.call��elem��i��elem��;
		}����;
	}��

	slice��function����{
		return this.pushStack��slice.apply��this��arguments����;
	}��

	��һ��function����{
		return this.eq��0��;
	}��

	last��function����{
		return this.eq��-1��;
	}��

	eq��function��i��{
		var len = this.length��
			j = + i +��i <0��len��0��;
		return this.pushStack��j> = 0 && j <len��[this [j]]��[]��;
	}��

	������function����{
		����this.prevObject || this.constructor��NULL��;
	}��

	// �����ڲ�ʹ�á�
	//���ֵ���һ��Array�ķ�������������jQuery������
	���ƣ�
	sort��arr.sort��
	ƴ�ӣ�arr.splice
};

jQuery.extend = jQuery.fn.extend = function����{
	var options��name��src��copy��copyIsArray��clone��
		target = arguments [0] || {}��
		i = 1��
		length = arguments.length��
		deep = false;

	//������㸴�����
	if��typeof target ===��boolean����{
		��=Ŀ��;

		//��������ֵ��Ŀ��
		target = arguments [i] || {};
		��++;
	}

	//��Ŀ�����ַ�����ĳ��ʱ�����Сд����������㸱���У�
	if��typeof target��==��object��&&��jQuery.isFunction��target����{
		target = {};
	}

	//���ֻ����һ������������չjQuery����
	if��i === length��{
		target = this;
		һ�� - ;
	}

	for��; i <length; i ++��{
		//ֻ�����null / undefinedֵ
		if����options = arguments [i]����= null��{
			//��չ��������
			for��ѡ���е����ƣ�{
				src = target [name];
				copy = options [name];

				//��ֹ����ֹ����ѭ��
				if��target === copy��{
					����;
				}

				//������Ǻϲ���ͨ��������飬��ݹ�
				if��deep && copy &&��jQuery.isPlainObject��copy��||��copyIsArray = jQuery.isArray��copy��������{
					if��copyIsArray��{
						copyIsArray = false;
						clone = src && jQuery.isArray��src����src��[];

					} else {
						clone = src && jQuery.isPlainObject��src����src��{};
					}

					//��Զ��Ҫ�ƶ�ԭʼ���󣬿�¡����
					target [name] = jQuery.extend��deep��clone��copy��;

				//��Ҫ����δ�����ֵ
				} else if��copy��== undefined��{
					target [name] = copy;
				}
			}
		}
	}

	//�����޸ĺ�Ķ���
	�ع�Ŀ��;
};

jQuery.extend��{
	//����ҳ���ϵ�ÿ��jQuery��������Ψһ��
	expando����jQuery��+��version + Math.random������.replace��/ \ D / g����������

	//����û�о���ģ��Ϳ���ʹ��jQuery
	isReady���ǵģ�

	����function��msg��{
		�׳��´���msg��;
	}��

	noop��function����{}��

	isFunction��function��obj��{
		return jQuery.type��obj��===��function��;
	}��

	isArray��Array.isArray��

	isWindow��function��obj��{
		return obj��= null && obj === obj.window;
	}��

	isNumeric��function��obj��{
		// parseFloat NaNs��ֵͶ���󱨣�null | true | false |������
		// ...���������ǰ�����ַ�����������ʮ���������֣���0x ...����
		//������ʹNaN�����
		//���1�ɾ���parseFloat����15100���ľ�����ʧ
		return��jQuery.isArray��obj��&&��obj  -  parseFloat��obj��+ 1��> = 0;
	}��

	isPlainObject��function��obj��{
		//������ͨ����
		//  - �ڲ�[[Class]]���Բ��ǡ�[object Object]�����κζ����ֵ
		//  -  DOM�ڵ�
		//  - ����
		if��jQuery.type��obj����==��object��|| obj.nodeType || jQuery.isWindow��obj����{
			�������;
		}

		if��obj.constructor &&
				��hasOwn.call��obj.constructor.prototype����isPrototypeOf������{
			�������;
		}

		//���������û�з��أ�����������
		// | obj | ��һ����ͨ�Ķ�����{}���������µ�Object����
		����true;
	}��

	isEmptyObject��function��obj��{
		var name;
		for��obj�е����֣�{
			�������;
		}
		����true;
	}��

	type��function��obj��{
		if��obj == null��{
			return obj +����;
		}
		//֧�֣�Android <4.0��iOS <6��������ȫ��RegExp��
		return typeof obj ===��object��|| typeof obj ===��function����
			class2type [toString.call��obj��] || �����󡱣�
			��������;
	}��

	//��ȫ���������������ű�
	globalEval��function��code��{
		var�ű���
			���= eval;

		code = jQuery.trim��code��;

		if��code��{
			//������������Ч������λ��
			//�ϸ�ģʽ����ָʾ��ͨ��ע��ִ�д���
			//�ű���ǵ��ĵ��С�
			if��code.indexOf����use strict����=== 1��{
				script = document.createElement����script����;
				script.text = code;
				document.head.appendChild��script��.parentNode.removeChild��script��;
			} else {
			//���򣬱��ⴴ��DOM�ڵ㣬����
			//ʹ�ü��ȫ��evalɾ��
				��ӵģ����룩;
			}
		}
	}��

	//������ת��ΪcamelCase; ��css������ģ��ʹ��
	//֧�֣�IE9-11 +
	//΢�������շ����ǵĹ�Ӧ��ǰ׺����9572��
	camelCase��function��string��{
		return string.replace��rmsPrefix����ms-����.replace��rdashAlpha��fcamelCase��;
	}��

	nodeName��function��elem��name��{
		return elem.nodeName && elem.nodeName.toLowerCase����=== name.toLowerCase����;
	}��

	// args�����ڲ�ʹ��
	each��function��obj��callback��args��{
		varֵ��
			i = 0��
			length = obj.length��
			isArray = isArraylike��obj��;

		if��args��{
			if��isArray��{
				for��; i <length; i ++��{
					value = callback.apply��obj [i]��args��;

					if��value === false��{
						����;
					}
				}
			} else {
				for��i in obj��{
					value = callback.apply��obj [i]��args��;

					if��value === false��{
						����;
					}
				}
			}

		//һ������ģ����ٵİ�������ÿ�������
		} else {
			if��isArray��{
				for��; i <length; i ++��{
					value = callback.call��obj [i]��i��obj [i]��;

					if��value === false��{
						����;
					}
				}
			} else {
				for��i in obj��{
					value = callback.call��obj [i]��i��obj [i]��;

					if��value === false��{
						����;
					}
				}
			}
		}

		����obj;
	}��

	//֧�֣�Android <4.1
	trim��function��text��{
		return text == null��
			������
			��text +������.replace��rtrim��������;
	}��

	//��������ڲ�ʹ��
	makeArray��function��arr��results��{
		var ret = results || [];

		if��arr��= null��{
			if��isArraylike��Object��arr������{
				jQuery.merge��ret��
					typeof arr ===��string����
					[arr]��arr
				��;
			} else {
				push.call��ret��arr��;
			}
		}

		����;
	}��

	inArray��function��elem��arr��i��{
		return arr == null��-1��indexOf.call��arr��elem��i��;
	}��

	�ϲ������ܣ���һ���ڶ���{
		var len = + second.length��
			j = 0��
			i = first.length;

		for��; j <len; j ++��{
			first [i ++] = second [j];
		}

		first.length = i;

		�Ȼ���;
	}��

	grep��function��elems��callback��invert��{
		var callbackInverse��
			matches = []��
			i = 0��
			length = elems.length��
			callbackExpect =��invert;

		//������飬ֻ������Ŀ
		//������֤������
		for��; i <length; i ++��{
			callbackInverse =��callback��elems [i]��i��;
			if��callbackInverse��== callbackExpect��{
				matches.push��elems [i]��;
			}
		}

		�ع����;
	}��

	// arg�����ڲ�ʹ��
	map��function��elems��callback��arg��{
		varֵ��
			i = 0��
			length = elems.length��
			isArray = isArraylike��elems����
			ret = [];

		//������飬��ÿ����Ŀת��Ϊ��ֵ
		if��isArray��{
			for��; i <length; i ++��{
				value = callback��elems [i]��i��arg��;

				if��value��= null��{
					ret.push��value��;
				}
			}

		//��������ϵ�ÿ������
		} else {
			for��i in elems��{
				value = callback��elems [i]��i��arg��;

				if��value��= null��{
					ret.push��value��;
				}
			}
		}

		//չƽ�κ�Ƕ������
		return concat.apply��[]��ret��;
	}��

	//�����ȫ��GUID������
	guid��1��

	//�������󶨵������ģ���ѡ�񲿷�Ӧ���κκ���
	//����
	proxy��function��fn��context��{
		var tmp��args��proxy;

		if��typeof context ===��string����{
			tmp = fn [context];
			context = fn;
			fn = tmp;
		}

		//�ڹ淶�п��ټ����ȷ��Ŀ���Ƿ�ɵ���
		//����׳�һ��TypeError��������ֻ����undefined��
		if����jQuery.isFunction��fn����{
			����undefined;
		}

		//ģ���
		args = slice.call��arguments��2��;
		proxy = function����{
			return fn.apply��context || this��args.concat��slice.call��arguments������;
		};

		//��Ψһ��������guid����Ϊԭʼ��������guid���Ա���Խ���ɾ��
		proxy.guid = fn.guid = fn.guid || jQuery.guid ++;

		���ش���;
	}��

	���ڣ�Date.now��

	// jQuery.supportδ��Core��ʹ�ã���������Ŀ����������
	//����������������Ҫ���ڡ�
	֧�֣�֧��
}��;

//���class2typeӳ��
jQuery.each��������ֵ�����ַ���������������RegExp�������.split����������������i��name��{
	class2type [��[object��+ name +��]��] = name.toLowerCase����;
}��;

function isArraylike��obj��{

	//֧�֣�iOS 8.2����ģ�����в������֣�
	//`in`������ڷ�ֹJIT����gh-2145��
	�����󱨣�//�˴�δʹ��hasOwn
	//����IE�е�Nodelist����
	obj && obj.length�е�var length =��length����
		type = jQuery.type��obj��;

	if��type ===��function��|| jQuery.isWindow��obj����{
		�������;
	}

	if��obj.nodeType === 1 && length��{
		����true;
	}

	��������===�����顱|| ����=== 0 ||
		typeof length ===��number��&& length> 0 &&��length  -  1��in obj;
}
var Sizzle =
/ *��
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 *��Ȩ����2008,2014 jQuery Foundation��Inc��������������
 *����MIT���֤����
 * http://jquery.org/license
 *
 *���ڣ�2014-12-16
 * /
��function��window��{

var i��
	֧�֣�
	EXPR��
	gettext�ģ�
	isXML��
	�ǺŻ���
	���룬
	ѡ��
	outermostContext��
	sortInput��
	hasDuplicate��

	//�����ĵ�����
	setDocument��
	���ף�
	docElem��
	documentIsHTML��
	rbuggyQSA��
	rbuggyMatches��
	���
	������

	//�ض���ʵ��������
	expando =��sizzle��+ 1 * new Date������
	preferredDoc = window.document��
	dirruns = 0��
	���= 0��
	classCache = createCache������
	tokenCache = createCache������
	compilerCache = createCache������
	sortOrder = function��a��b��{
		if��a === b��{
			hasDuplicate = true;
		}
		����0;
	}��

	//ͨ�ó���
	MAX_NEGATIVE = 1 << 31��

	//ʵ������
	hasOwn =��{}����hasOwnProperty��
	arr = []��
	pop = arr.pop��
	push_native = arr.push��
	push = arr.push��
	slice = arr.slice��
	//ʹ�þ����indexOf����Ϊ����native����
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function��list��elem��{
		var i = 0��
			len = list.length;
		for��; i <len; i ++��{
			if��list [i] === elem��{
				�ع���;
			}
		}
		����-1;
	}��

	booleans =��checked | selected | async | autofocus | autoplay | controls | defer | disabled | hidden | ismap | loop | multiple | open | readonly | required | scoped����

	// ���ñ��

	//�հ��ַ�http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace =��[\\ x20 \\ t \\ r \\ n \\ f]����
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding =��������\\\\��| [\\ w-] | [^ \\ x00  -  \\ xa0]��+����

	//��CSS��ʶ���ַ�����ɢ��ģ
	//�������ŵ�ֵӦ����CSS��ʶ��http://www.w3.org/TR/css3-selectors/#attribute-selectors
	//��ȷ���﷨��http��//www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace����w������w��������

	//����ѡ������http��//www.w3.org/TR/selectors/#attribute-selectors
	attributes =��\\ [��+ whitespace +��*����+ characterEncoding +������������+ whitespace +
		//�����������2��
		��*��[* ^ $ |��?]��=����+�հ�+
		//������ֵ������CSS��ʶ��[capture 5]���ַ���[capture 3��capture 4]��
		��*������ '��������\\\\ | [^ \\\\']��*��'| \ ����������\\\\ | [^ \\\\\��] ��*��\��|����+��ʶ��+������|����+�հ�+
		��* \\]����

	pseudos =��:(��+ characterEncoding +����������\\������+
		//Ҫ����preFilter����Ҫtokenize��ѡ�������������ϲ��������
		// 1.���ã�����3;����4�򲶻�5��
		���� '��������\\\\ | [^ \\\\']��*��'| \ ����������\\\\ | [^ \\\\\��]��*�� \����|��+
		// 2.�򵥣�����6��
		����������\\\\��| [^ \\\\����[\\]] |��+����+����*��|�� +
		// 3.�����κζ���������2��
		����*��+
		����\\��|������

	//ǰ���ͷ�ת��β���ո񣬲������֮ǰ��һЩ�ǿո��ַ�
	rwhitespace = new RegExp���ո�+��+������g������
	rtrim = new RegExp����^��+ whitespace +��+ |��������^ | [^ \\\\]��������\\\\����*����+ whitespace +��+ $������g ������

	rcomma = new RegExp����^��+ whitespace +��*����+ whitespace +��*������
	rcombinators = new RegExp����^��+ whitespace +��*��[> +?] |��+ whitespace +������+ whitespace +��*������

	rattributeQuotes = new RegExp����=��+ whitespace +��*��[^ \\]'\��] *������+ whitespace +��* \\]������g������

	rpseudo =�µ�RegExp��α����
	ridentifier = new RegExp����^��+ identifier +��$������

	matchExpr = {
		��ID�����µ�RegExp����^������+ characterEncoding +����������
		��CLASS�����µ�RegExp����^ \\������+ characterEncoding +����������
		��TAG�����µ�RegExp����^����+ characterEncoding.replace����w������w *����+����������
		��ATTR�����µ�RegExp����^��+���ԣ���
		��PSEUDO�����µ�RegExp����^��+ pseudos����
		��CHILD�����µ�RegExp����^ :(ֻ��|��һ��|���һ��|��n��|��n�� - ���һ���� - �����ӵ����ͣ�������\\����+ + whitespace +
			��*��ż��|����|����[+  - ] |����\\ d *��n |����+�ո�+��*����:( [+  - ] |����+�հ�+
			��*��\\ d +��|������+ whitespace +��* \\��|��������i������
		��bool�����µ�RegExp����^��������+ booleans +����$������i������
		//����ʵ��.is�����Ŀ�
		//������`select`�н�������POSƥ��
		��needsContext�����µ�RegExp����^��+�ո�+��* [> +?] | :(ż��|����| eq | gt | lt | nth | first | last��������\\����+
			�ո�+��*�������� -  \\ d����\\ d *����+�ո�+��* \\��|������= [^  - ] | $��������i����
	}��

	rinputs = / ^������input | select | textarea | button��$ / i��
	rheader = / ^ h \ d $ / i��

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /��

	//���ڽ���/�ɼ�����ID��TAG��CLASSѡ����
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\ .( [.w-]+))$/,

	rsibling = / [+?] /��
	rescape = /'| \\ / g��

	// CSS����http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp����\\\\��[\\ da-f] {1,6}��+ whitespace +����������+ whitespace +����|����������ig������
	funescape = function��_��escaped��escapedWhitespace��{
		var high =��0x��+ת�� -  0x10000;
		// NaN��ʾ�Ǵ����
		//֧�֣�Firefox <24
		//�����������ֽ���+��0x��
		���ظߣ�==��|| �ӹ����죿
			���ѣ�
			��<0��
				// BMP�����
				String.fromCharCode��high + 0x10000����
				//����ƽ�����㣨����ԣ�
				String.fromCharCode��high >> 10 | 0xD800��high��0x3FF | 0xDC00��;
	}��

	//����iframe
	//�����setDocument����
	//ɾ��������װ���¡�Ȩ�ޱ��ܾ���
	// IE�еĴ���
	unloadHandler = function����{
		setDocument����;
	};

//�Ż�push.apply��_��NodeList��
����{
	push.apply��
		��arr = slice.call��preferredDoc.childNodes������
		preferredDoc.childNodes
	��;
	//֧�֣�Android <4.0
	//�����ؼ�⵽push.applyʧ��
	arr [preferredDoc.childNodes.length] .nodeType;
} catch��e��{
	push = {apply��arr.length��

		//������ܣ�������Ƭ
		function��target��els��{
			push_native.apply��target��slice.call��els����;
		}��

		//֧�֣�IE <9
		//����ֱ�Ӹ���
		function��target��els��{
			var j = target.length��
				i = 0;
			//��������NodeList.length
			while����target [j ++] = els [i ++]����{}
			target.length = j  -  1;
		}
	};
}

function Sizzle��ѡ�����������ģ���������ӣ�{
	var match��elem��m��nodeType��
		// QSA����
		i��groups��old��nid��newContext��newSelector;

	if����context��context.ownerDocument || context��preferredDoc����== document��{
		setDocument��context��;
	}

	context = context || ����;
	���=���|| [];
	nodeType = context.nodeType;

	if��typeof selector��==��string��||��selector ||
		nodeType��== 1 && nodeType��== 9 && nodeType��== 11��{

		���ؽ��;
	}

	if����seed && documentIsHTML��{

		//�����ڿ��ܵ�����¿�ݲ��Ҳ��������磬����DocumentFragment�£�
		if��nodeType��== 11 &&��match = rquickExpr.exec��selector������{
			//���٣�˻˻��������ID����
			if����m = match [1]����{
				if��nodeType === 9��{
					elem = context.getElementById��m��;
					//���parentNode�Ա���Blackberry 4.6����ʱ����
					//�������ĵ��еĽڵ㣨jQuery��6963��
					if��elem && elem.parentNode��{
						//����IE��Opera��Webkit������Ŀ�����
						//�����ƶ�����ID
						if��elem.id === m��{
							results.push��elem��;
							���ؽ��;
						}
					} else {
						���ؽ��;
					}
				} else {
					//�����Ĳ����ĵ�
					if��context.ownerDocument &&��elem = context.ownerDocument.getElementById��m����&&
						contains��context��elem��&& elem.id === m��{
						results.push��elem��;
						���ؽ��;
					}
				}

			//���٣�˻˻������TAG����
			} else if��match [2]��{
				push.apply��results��context.getElementsByTagName��selector����;
				���ؽ��;

			//���٣�˻˻��������CLASS����
			} else if����m = match [3]��&& support.getElementsByClassName��{
				push.apply��results��context.getElementsByClassName��m����;
				���ؽ��;
			}
		}

		// QSA·��
		if��support.qsa &&����rbuggyQSA ||��rbuggyQSA.test��selector������{
			nid = old = expando;
			newContext = context;
			newSelector = nodeType��== 1 && selector;

			// qSA�ڻ���Ԫ�صĲ�ѯ����ֵع���
			//���ǿ���ͨ���ڸ�Ŀ¼��ָ��һ�������ID������������
			//�������￪ʼ��������лAndrew Dupont�ļ�����
			// IE 8�������ڶ���Ԫ��
			if��nodeType === 1 && context.nodeName.toLowerCase������==��object����{
				groups = tokenize��selector��;

				if����old = context.getAttribute����id��������{
					nid = old.replace��rescape����\\ $������;
				} else {
					context.setAttribute����id����nid��;
				}
				nid =��[id ='��+ nid +��']��;

				i = groups.length;
				���� -  �� {
					groups [i] = nid + toSelector��groups [i]��;
				}
				newContext = rsibling.test��selector��&& testContext��context.parentNode��|| ������;
				newSelector = groups.join����������;
			}

			if��newSelector��{
				����{
					push.apply�������
						newContext.querySelectorAll��newSelector��
					��;
					���ؽ��;
				} catch��qsaError��{
				} finally {
					if����old��{
						context.removeAttribute�� ��ID����;
					}
				}
			}
		}
	}

	// ����������
	return select��selector.replace��rtrim����$ 1������context��results��seed��;
}

/ **
 *�������޴�С�ļ�ֵ����
 * @returns {Function��string��Object��}���������ݴ洢������󣬷��ض�������
 *�������ƣ����ո�ģ��ַ����ͣ�����������Expr.cacheLength��
 *ɾ����ɵ���Ŀ
 * /
function createCache����{
	var keys = [];

	function cache��key��value��{
		//ʹ�ã���+�����������뱾��ԭ�����Գ�ͻ����������⣣157��
		if��keys.push��key +������> Expr.cacheLength��{
			//���������µ���Ŀ
			delete cache [keys.shift����];
		}
		return��cache [key +����] = value��;
	}
	���ػ���;
}

/ **
 *���Sizzle������;�Ĺ���
 * @param {Function} fn��ǵĹ���
 * /
function markFunction��fn��{
	fn [expando] = true;
	����fn;
}

/ **
 *֧��ʹ��Ԫ�ؽ��в���
 * @param {Function} fn���ݴ�����div������һ���������
 * /
function assert��fn��{
	var div = document.createElement����div����;

	����{
		return !! fn��div��;
	} catch��e��{
		�������;
	} finally {
		//Ĭ������´��丸����ɾ��
		if��div.parentNode��{
			div.parentNode.removeChild��div��;
		}
		//��IE���ͷ��ڴ�
		div = null;
	}
}

/ **
 *Ϊ����ָ����attrs�����ͬ�Ĵ������
 * @param {String} attrs�Թܵ��ָ��������б�
 * @param {Function} handler��Ӧ�õķ���
 * /
function addHandle��attrs��handler��{
	var arr = attrs.split����|������
		i = attrs.length;

	���� -  �� {
		Expr.attrHandle [arr [i]] =�������;
	}
}

/ **
 *��������ֵܽ��õ��ļ�˳��
 * @param {Element} a
 * @param {Element} b
 * @returns {Number}���a��b֮ǰ���򷵻�С��0�����a����b���򷵻ش���0
 * /
function siblingCheck��a��b��{
	var cur = b && a��
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			��~b.sourceIndex || MAX_NEGATIVE�� - 
			��~a.sourceIndex || MAX_NEGATIVE��;

	//��������ڵ㶼���ã���ʹ��IE sourceIndex
	if��diff��{
		���ز���;
	}

	//���b�Ƿ����a
	if��cur��{
		while����cur = cur.nextSibling����{
			if��cur === b��{
				����-1;
			}
		}
	}

	�����ˣ�1��-1;
}

/ **
 *������α�����������������͵ĺ���
 * @param {String}����
 * /
function createInputPseudo��type��{
	return������elem��{
		var name = elem.nodeName.toLowerCase����;
		��������===�����롱&& elem.type === type;
	};
}

/ **
 *����һ����α��ť��ʹ�õĺ���
 * @param {String}����
 * /
function createButtonPseudo��type��{
	return������elem��{
		var name = elem.nodeName.toLowerCase����;
		return��name ===��input��|| name ===��button����&& elem.type === type;
	};
}

/ **
 *����һ����pseudos�����ڶ�λ�ĺ���
 * @param {Function} fn
 * /
function createPositionalPseudo��fn��{
	return markFunction��function��argument��{
		argument = + argument;
		return markFunction��function��seed��matches��{
			var j��
				matchIndexes = fn��[]��seed.length��argument����
				i = matchIndexes.length;

			//ƥ����ָ���������ҵ���Ԫ��
			���� -  �� {
				if��seed [��j = matchIndexes [i]��]��{
					seed [j] =����ƥ��[j] = seed [j]��;
				}
			}
		}��;
	}��;
}

/ **
 *���ڵ����Ч����ΪSizzle������
 * @param {Element | Object =}������
 * @returns {Element | Object | Boolean}����ڵ㣨����ɽ��ܣ�������Ϊ��ֵ
 * /
function testContext��context��{
	return context && typeof context.getElementsByTagName��==��undefined��&& context;
}

//Ϊ�������������֧�ֱ���
support = Sizzle.support = {};

/ **
 *���XML�ڵ�
 * @param {Element | Object} elemԪ�ػ��ĵ�
 * @returns {Boolean}���iff elem�Ƿ�HTML XML�ڵ㣬��Ϊtrue
 * /
isXML = Sizzle.isXML = function��elem��{
	//������δ���ڵ����������֤documentElement
	//��������IE�м���iframe  - ��4833��
	var documentElement = elem &&��elem.ownerDocument || elem��.documentElement;
	return documentElement��documentElement.nodeName��==��HTML����false;
};

/ **
 *���ݵ�ǰ�ĵ�����һ�����ĵ���صı���
 * @param {Element | Object} [doc]���������ĵ���Ԫ�ػ��ĵ�����
 * @returns {Object}���ص�ǰ�ĵ�
 * /
setDocument = Sizzle.setDocument = function��node��{
	var hasCompare��parent��
		doc = node��node.ownerDocument || node��preferredDoc;

	//���û���ĵ���documentElement���ã��뷵��
	if��doc === document || doc.nodeType��== 9 ||��doc.documentElement��{
		�˻��ļ�;
	}

	//�������ǵ��ļ�
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	//֧�֣�IE> 8
	//�����iframe�ĵ��������document����������iframe�����¼��أ�
	//���ʡ�document������ʱ��IE���׳���Ȩ�ޱ��ܾ������������jQuery��13936
	// IE6-8��֧��defaultView���ԣ���˸�������δ�����
	if��parent && parent��== parent.top��{
		// IE11û��attachEvent�����������˶������ܿ�
		if��parent.addEventListener��{
			parent.addEventListener����unload����unloadHandler��false��;
		} else if��parent.attachEvent��{
			parent.attachEvent����onunload����unloadHandler��;
		}
	}

	/ *֧�ֲ���
	-------------------------------------------------- -------------------- * /
	documentIsHTML =��isXML��doc��;

	/ *����
	-------------------------------------------------- -------------------- * /

	//֧�֣�IE <8
	//ȷ��getAttributeȷʵ�������Զ���������
	//��IE8�������⣩
	support.attributes = assert��function��div��{
		div.className =��i��;
		return��div.getAttribute����className����;
	}��;

	/ * getElement��s��By *
	-------------------------------------------------- -------------------- * /

	//���getElementsByTagName����*�����Ƿ������Ԫ��
	support.getElementsByTagName = assert��function��div��{
		div.appendChild��doc.createComment����������;
		return��div.getElementsByTagName����*������length;
	}��;

	//֧�֣�IE <9
	support.getElementsByClassName = rnative.test��doc.getElementsByClassName��;

	//֧�֣�IE <10
	//���getElementById�Ƿ����Ʒ���Ԫ��
	//�ƻ���getElementById���������ȡ�Ա�̷�ʽ���õ����ƣ�
	//����ʹ�û��ν����getElementsByName����
	support.getById = assert��function��div��{
		docElem.appendChild��div��.id = expando;
		return��doc.getElementsByName || ��doc.getElementsByName��expando��.length;
	}��;

	// ID���Һ͹���
	if��support.getById��{
		Expr.find [��ID��] = function��id��context��{
			if��typeof context.getElementById��==��undefined��&& documentIsHTML��{
				var m = context.getElementById��id��;
				//���parentNode�Ա���Blackberry 4.6����ʱ����
				//�������ĵ���6963�еĽڵ�
				����m && m.parentNode��[m]��[];
			}
		};
		Expr.filter [��ID��] =������id��{
			var attrId = id.replace��runescape��funescape��;
			return������elem��{
				return elem.getAttribute����id����=== attrId;
			};
		};
	} else {
		//֧�֣�IE6 / 7
		// getElementById��Ϊ���ҿ�ݷ�ʽ���ɿ�
		ɾ��Expr.find [��ID��];

		Expr.filter [��ID��] =������id��{
			var attrId = id.replace��runescape��funescape��;
			return������elem��{
				var node = typeof elem.getAttributeNode��==��undefined��&& elem.getAttributeNode����id����;
				return node && node.value === attrId;
			};
		};
	}

	// ��ǩ
	Expr.find [��TAG��] = support.getElementsByTagName��
		function��tag��context��{
			if��typeof context.getElementsByTagName��==��undefined����{
				return context.getElementsByTagName��tag��;

			// DocumentFragment�ڵ�û��gEBTN
			} else if��support.qsa��{
				return context.querySelectorAll��tag��;
			}
		}��

		function��tag��context��{
			var elem��
				tmp = []��
				i = 0��
				//���˵����ɺϣ�һ��������ģ�gEBTNҲ������DocumentFragment�ڵ���
				results = context.getElementsByTagName��tag��;

			//���˵����ܵ�����
			if��tag ===��*����{
				while����elem = results [i ++]����{
					if��elem.nodeType === 1��{
						tmp.push��elem��;
					}
				}

				����tmp;
			}
			���ؽ��;
		};

	//��
	Expr.find [��CLASS��] = support.getElementsByClassName && function��className��context��{
		if��documentIsHTML��{
			return context.getElementsByClassName��className��;
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA��matchesSelector֧��

	// matchesSelector����active����Ϊtrueʱ����Ϊfalse��IE9 / Opera 11.5��
	rbuggyMatches = [];

	// qSa����focus����Ϊtrueʱ����Ϊfalse��Chrome 21��
	//������������������ΪIE8 / 9�еĴ������������
	//ÿ����iframe�Ϸ���`document.activeElement`ʱ
	//���ԣ�������������һֱͨ��QSA������IE����
	//��http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if����support.qsa = rnative.test��doc.querySelectorAll������{
		//����QSA������ʽ
		//����Diego Perini��������ʽ����
		���ԣ�function��div��{
			// Select��������Ϊ���ַ���
			//����Ϊ�˲���IE��δ��ȷ����
			//���ò����������ԣ�
			//��Ϊ���Ĵ���Ӧ���㹻��
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild��div��.innerHTML =��<a id ='" + expando +��'> </a>��+
				��<select id ='��+ expando +�� -  \ f]'msallowcapture =''>��+
				��<option selected =''> </ option> </ select>��;

			//֧�֣�IE8��Opera 11-12.16
			//�����ַ�������^ =��$ =��* =ʱ����Ӧѡ���κ�����
			//����������Opera�б�����δ֪�ģ�����WinRT��˵�ǡ���ȫ�ġ�
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if��div.querySelectorAll����[msallowcapture ^ ='']������length��{
				rbuggyQSA.push����[* ^ $] =��+ whitespace +��*������''| \��\��������;
			}

			//֧�֣�IE8
			//�������Ժ͡�ֵ��δ��ȷ����
			if����div.querySelectorAll����[selected]������length��{
				rbuggyQSA.push����\\ [��+ whitespace +��*��?: value |��+ booleans +��������;
			}

			//֧�֣�Chrome <29��Android <4.2 +��Safari <7.0 +��iOS <7.0 +��PhantomJS <1.9.7+
			if����div.querySelectorAll����[id~ =��+ expando +�� - ]������length��{
				rbuggyQSA.push�� ��?=����;
			}

			// Webkit / Opera  - ��checkedӦ����ѡ����ѡ��Ԫ��
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8�������׳����󣬲��ῴ���Ժ�Ĳ���
			if����div.querySelectorAll������checked������length��{
				rbuggyQSA.push�� ������顱��;
			}

			//֧�֣�Safari 8 +��iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			//ҳ��`ѡ����#id sibing-combinator selector`ʧ��
			if����div.querySelectorAll����a����+ expando +��+ *������length��{
				rbuggyQSA.push�� ����+ [+?]������;
			}
		}��;

		���ԣ�function��div��{
			//֧�֣�Windows 8 Native Apps
			//��.innerHTML��ֵ�ڼ䣬���ͺ����������ܵ�����
			var input = doc.createElement����input����;
			input.setAttribute����type������hidden����;
			div.appendChild��input��.setAttribute����name������D����;

			//֧�֣�IE8
			//ǿ��ʹ��name�������ִ�Сд
			if��div.querySelectorAll����[name = d]������length��{
				rbuggyQSA.push����name��+ whitespace +��* [* ^ $ |��?]��=����;
			}

			// FF 3.5  - ������/�����ú�����Ԫ�أ�����Ԫ����Ȼ���ã�
			// IE8�������׳����󣬲��ῴ���Ժ�Ĳ���
			if����div.querySelectorAll������enabled������length��{
				rbuggyQSA.push������enabled��������disabled����;
			}

			// Opera 10-11�����׳����ź����Чα
			div.querySelectorAll�� ��* ,: X����;
			rbuggyQSA.push�� ��*������;
		}��;
	}

	if����support.matchesSelector = rnative.test����matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector��������{

		���ԣ�function��div��{
			//����Ƿ����ִ��matchesSelector
			//�ڶϿ����ӵĽڵ��ϣ�IE 9��
			support.disconnectedMatch = matches.call��div����div����;

			//��Ӧ�û�ʧ�ܲ������쳣
			// Geckoû�д��󣬶��Ƿ���false
			matches.call��div����[s��='']��x����;
			rbuggyMatches.push������=����pseudos��;
		}��;
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp��rbuggyQSA.join����|������;
	rbuggyMatches = rbuggyMatches.length && new RegExp��rbuggyMatches.join����|������;

	/ *����
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test��docElem.compareDocumentPosition��;

	//Ԫ�ذ�����һ��
	//��Ŀ�ĵ�û��ʵ�ְ����Ժ��
	//��ͬ��Ԫ�ز���������
	contains = hasCompare || rnative.test��docElem.contains����
		function��a��b��{
			var adown = a.nodeType === 9��a.documentElement��a��
				bup = b && b.parentNode;
			����=== bup || !!��bup && bup.nodeType === 1 &&��
				adown.contains��
					adown.contains��bup����
					a.compareDocumentPosition && a.compareDocumentPosition��bup����16
			����;
		}��
		function��a��b��{
			if��b��{
				while����b = b.parentNode����{
					if��b === a��{
						����true;
					}
				}
			}
			�������;
		};

	/ *����
	-------------------------------------------------- -------------------- * /

	//�ĵ���������
	sortOrder = hasCompare��
	function��a��b��{

		//�ظ�ɾ�����
		if��a === b��{
			hasDuplicate = true;
			����0;
		}

		//���ֻ��һ���������compareDocumentPosition�������򷽷�����
		var compare =��a.compareDocumentPosition  - ��b.compareDocumentPosition;
		if��compare��{
			�ر��Ƚ�;
		}

		//����������붼����ͬһ�ĵ��������λ��
		compare =��a.ownerDocument || a��===��b.ownerDocument || b����
			a.compareDocumentPosition��b����

			//��������֪�������ѶϿ�����
			1;

		//�Ͽ����ӵĽڵ�
		if���Ƚϣ�1 ||
			����support.sortDetached && b.compareDocumentPosition��a��=== compare����{

			//ѡ������ѡ�ĵ���صĵ�һ��Ԫ��
			if��a === doc || a.ownerDocument === preferredDoc && contains��preferredDoc��a����{
				����-1;
			}
			if��b === doc || b.ownerDocument === preferredDoc && contains��preferredDoc��b����{
				����1;
			}

			//����ԭʼ����
			����sortInput��
				��indexOf��sortInput��a�� -  indexOf��sortInput��b������
				0;
		}

		���رȽϣ�4��-1��1;
	}��
	function��a��b��{
		//����ڵ���ͬ������ǰ�˳�
		if��a === b��{
			hasDuplicate = true;
			����0;
		}

		var cur��
			i = 0��
			aup = a.parentNode��
			bup = b.parentNode��
			ap = [a]��
			bp = [b];

		//�޸��ڵ����ĵ���Ͽ�����
		if����aup ||��bup��{
			����һ��=== doc��-1��
				b === doc��1��
				����-1��
				bup��1��
				sortInput��
				��indexOf��sortInput��a�� -  indexOf��sortInput��b������
				0;

		//����ڵ����ֵܽڵ㣬���ǿ��Կ��ټ��
		} else if��aup === bup��{
			return siblingCheck��a��b��;
		}

		//����������Ҫ���ǵ����ȵ������б���бȽ�
		cur = a;
		while����cur = cur.parentNode����{
			ap.unshift��cur��;
		}
		cur = b;
		while����cur = cur.parentNode����{
			bp.unshift��cur��;
		}

		//������Ѱ�Ҳ���
		while��ap [i] === bp [i]��{
			��++;
		}

		�����ң�
			//���ֵܼ��ڵ��Ƿ��й�ͬ������
			siblingCheck��ap [i]��bp [i]����

			//���������ĵ��еĽڵ���������
			ap [i] === preferredDoc��-1��
			bp [i] === preferredDoc��1��
			0;
	};

	�����ĵ�;
};

Sizzle.matches = function��expr��elements��{
	return Sizzle��expr��null��null��elements��;
};

Sizzle.matchesSelector = function��elem��expr��{
	//�����Ҫ�������ĵ�����
	if����elem.ownerDocument || elem����== document��{
		setDocument��elem��;
	}

	//ȷ����������ѡ����
	expr = expr.replace��rattributeQuotes����='$ 1']����;

	if��support.matchesSelector && documentIsHTML &&
		����rbuggyMatches ||��rbuggyMatches.test��expr����&&
		����rbuggyQSA ||��rbuggyQSA.test��expr������{

		����{
			var ret = matches.call��elem��expr��;

			// IE 9��matchesSelector�ڶϿ����ӵĽڵ��Ϸ���false
			if��ret || support.disconnectedMatch ||
					//ͬ�����Ͽ����ӵĽڵ�Ҳ����Ϊ�ĵ�
					// IE 9�е�Ƭ��
					elem.document && elem.document.nodeType��== 11��{
				����;
			}
		} catch��e��{}
	}

	return Sizzle��expr��document��null��[elem]����length> 0;
};

Sizzle.contains = function��context��elem��{
	//�����Ҫ�������ĵ�����
	if����context.ownerDocument || context����== document��{
		setDocument��context��;
	}
	return contains��context��elem��;
};

Sizzle.attr = function��elem��name��{
	//�����Ҫ�������ĵ�����
	if����elem.ownerDocument || elem����== document��{
		setDocument��elem��;
	}

	var fn = Expr.attrHandle [name.toLowerCase����]��
		//��Ҫ��Object.prototype���ԣ�jQuery��13807�����Ի�
		val = fn && hasOwn.call��Expr.attrHandle��name.toLowerCase��������
			fn��elem��name����documentIsHTML����
			��ȷ����;

	return val��== undefined��
		val��
		support.attributes || ��documentIsHTML��
			elem.getAttribute��name����
			��val = elem.getAttributeNode��name����&& val.specified��
				val.value��
				��ֵ;
};

Sizzle.error = function��msg��{
	�׳��´��󣨡��﷨�����޷�ʶ��ı��ʽ����+ msg��;
};

/ **
 *�ļ������ɾ���ظ�
 * @param {ArrayLike}���
 * /
Sizzle.uniqueSort = function��results��{
	var elem��
		duplicates = []��
		j = 0��
		i = 0;

	//��������*֪��*���ǿ��Լ�⵽�ظ��������������Ǵ���
	hasDuplicate =��support.detectDuplicates;
	sortInput =��support.sortStable && results.slice��0��;
	results.sort��sortOrder��;

	if��hasDuplicate��{
		while����elem = results [i ++]����{
			if��elem === results [i]��{
				j = duplicates.push��i��;
			}
		}
		while��j--��{
			results.splice��duplicates [j]��1��;
		}
	}

	//���������������ͷŶ���
	//�����https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	���ؽ��;
};

/ **
 *ʵ�ó����������ڼ���DOM�ڵ�������ı�ֵ
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function��elem��{
	var�ڵ㣬
		ret =������
		i = 0��
		nodeType = elem.nodeType;

	if����nodeType��{
		//���û��nodeType����ô��Ӧ����һ������
		while����node = elem [i ++]����{
			//��Ҫ�������۽ڵ�
			ret + = getText��node��;
		}
	} else if��nodeType === 1 || nodeType === 9 || nodeType === 11��{
		//��Ԫ��ʹ��textContent
		//ɾ����innerText�÷��Ա�֤���е�һ���ԣ�jQuery��11153��
		if��typeof elem.textContent ===��string����{
			return elem.textContent;
		} else {
			//��Խ���ĺ���
			for��elem = elem.firstChild; elem; elem = elem.nextSibling��{
				ret + = getText��elem��;
			}
		}
	} else if��nodeType === 3 || nodeType === 4��{
		return elem.nodeValue;
	}
	//������ע�ͻ���ָ��ڵ�

	����;
};

Expr = Sizzle.selectors = {

	//�������û�����
	cacheLength��50��

	createPseudo��markFunction��

	ƥ�䣺matchExpr��

	attrHandle��{}��

	�ң� {}��

	���ݣ�{
		��>����{dir����parentNode����first��true}��
		������{dir����parentNode��}��
		��+����{dir����previousSibling����first��true}��
		��?����{dir����previousSibling��}
	}��

	preFilter��{
		��ATTR����function��match��{
			match [1] = match [1] .replace��runescape��funescape��;

			//�ƶ�����ֵ��ƥ��[3]�����û��ǲ�����
			match [3] =��match [3] || match [4] || match [5] ||������.replace��runescape��funescape��;

			if��match [2] ===��?=����{
				match [3] =����+ match [3] +����;
			}

			return match.slice��0,4��;
		}��

		��CHILD����function��match��{
			/ *ƥ������matchExpr [��CHILD��]
				1�����ͣ���| nth | ...��
				2ʲô�����ӵ����ͣ�
				3��������ż��|����| \ d * | \ d * n��[+  - ] \ d +����| ...��
				xn + y������4 xn������[+  - ]��\ d * n |��
				xn-component��5������
				6 x xn-component
				y������7������
				yԪ��8 y
			* /
			match [1] = match [1] .toLowerCase����;

			if��match [1] .slice��0,3��===��nth����{
				// nth- *��Ҫ����
				if����match [3]��{
					Sizzle.error��ƥ��[0]��;
				}

				// Expr.filter.CHILD������x��y����
				//��סfalse / true�ֱ�Ϊ0/1
				match [4] = +��match [4]��match [5] +��match [6] || 1����2 *��match [3] ===��even��|| match [3] ===����ֵġ�����;
				match [5] = +����match [7] + match [8]��|| match [3] ===��odd����;

			//�������ͽ�ֹ����
			} else if��match [3]��{
				Sizzle.error��ƥ��[0]��;
			}

			�ع����;
		}��

		��PSEUDO����function��match��{
			var��ʣ��
				unquoted =��match [6] && match [2];

			if��matchExpr [��CHILD��]��test��match [0]����{
				return null;
			}

			//��ԭ���������õĲ���
			if��match [3]��{
				ƥ��[2] =ƥ��[4] || ƥ��[5] || ����;

			//�Ӳ������ŵĲ�����ɾ��������ַ�
			} else if��unquoted && rpseudo.test��unquoted��&&
				//��tokenize�л�ȡ���ࣨ�ݹ飩
				��excess = tokenize��unquoted��true����&&
				//ǰ������һ��������
				��excess = unquoted.indexOf����������unquoted.length  -  excess�� -  unquoted.length����{

				//�����Ǹ�ָ��
				match [0] = match [0] .slice��0��excess��;
				match [2] = unquoted.slice��0��excess��;
			}

			//������α��������������Ĳ������ͺͲ�����
			return match.slice��0,3��;
		}
	}��

	��������{

		��TAG����function��nodeNameSelector��{
			var nodeName = nodeNameSelector.replace��runescape��funescape��.toLowerCase����;
			return nodeNameSelector ===��*����
				function����{return true; }��
				function��elem��{
					return elem.nodeName && elem.nodeName.toLowerCase����=== nodeName;
				};
		}��

		��CLASS����function��className��{
			var pattern = classCache [className +����];

			����ģʽ||
				��pattern = new RegExp������^ |��+ whitespace +������+ className +������+ whitespace +��| $��������&&
				classCache��className��function��elem��{
					return pattern.test��typeof elem.className ===��string��&& elem.className || typeof elem.getAttribute��==��undefined��&& elem.getAttribute����class����||������;
				}��;
		}��

		��ATTR�������������ƣ����������飩{
			return������elem��{
				var result = Sizzle.attr��elem��name��;

				if��result == null��{
					return operator ===����=��;
				}
				if����operator��{
					����true;
				}

				���+ =����;

				return operator ===��=�������===��飺
					operator ===����=���������==��飺
					operator ===��^ =����check && result.indexOf��check��=== 0��
					operator ===��* =����check && result.indexOf��check��> -1��
					operator ===��$ =����check && result.slice��-check.length��=== check��
					operator ===��?=����������+ result.replace��rwhitespace��������+��������indexOf��check��> -1��
					operator ===��| =�������===���|| result.slice��0��check.length + 1��=== check +�� - ����
					��;
			};
		}��

		��CHILD�������������ͣ����ݣ���������һ�������һ����{
			var simple = type.slice��0,3����==��nth����
				forward = type.slice��-4����==��last����
				ofType = what ===��of-type��;

			���ȷ���=== 1 && last === 0��

				//��ݷ�ʽ����n  -  *��n��
				function��elem��{
					return !! elem.parentNode;
				}��

				function��elem��context��xml��{
					var cache��outerCache��node��diff��nodeIndex��start��
						dir =�򵥣�==ת������nextSibling������previousSibling����
						parent = elem.parentNode��
						name = ofType && elem.nodeName.toLowerCase������
						useCache =��xml &&��ofType;

					if��parent��{

						// :( first | last | only�� - ��child | of-type��
						if��simple��{
							while��dir��{
								node = elem;
								while����node = node [dir]����{
									if��ofType��node.nodeName.toLowerCase����=== name��node.nodeType === 1��{
										�������;
									}
								}
								//���򣺽� -  *��������ǻ�û����������
								start = dir = type ===��only��&&��start &&��nextSibling��;
							}
							����true;
						}

						��ʼ= [ǰ����parent.firstChild��parent.lastChild];

						// non-xml��nth-??child��...�����������ݴ洢��`parent`��
						if��forward && useCache��{
							//����ǰ���������������`elem`
							outerCache = parent [expando] || ��parent [expando] = {}��;
							cache = outerCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = cache [0] === dirruns && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while����node = ++ nodeIndex && node && node [dir] ||

								//��һ��ʼ�ͻع�Ѱ��elem��
								��diff = nodeIndex = 0��|| start.pop��������{

								//�ҵ�����`parent`�ϻ����������ж�
								if��node.nodeType === 1 && ++ diff && node === elem��{
									outerCache [type] = [dirruns��nodeIndex��diff];
									����;
								}
							}

						//ʹ����ǰ�����Ԫ��������������ã�
						} else if��useCache &&��cache =��elem [expando] ||��elem [expando] = {}����[type]��&& cache [0] === dirruns��{
							diff = cache [1];

						// xml��nth-??child��...����nth-??last-child��...����nth��-last���� -  of-type��...��
						} else {
							//ʹ����������ͬ��ѭ����ͷ��ʼѰ�ҡ�elem��
							while����node = ++ nodeIndex && node && node [dir] ||
								��diff = nodeIndex = 0��|| start.pop��������{

								if����ofType��node.nodeName.toLowerCase����=== name��node.nodeType === 1��&& ++ diff��{
									//����ÿ������Ԫ�ص�����
									if��useCache��{
										��node [expando] ||��node [expando] = {}����[type] = [dirruns��diff];
									}

									if��node === elem��{
										����;
									}
								}
							}
						}

						//�ϲ�ƫ������Ȼ�������ڴ�С
						diff  -  = last;
						return diff === first || ��diff��first === 0 && diff / first> = 0��;
					}
				};
		}��

		��PSEUDO����function��α��������{
			//α�����Ʋ����ִ�Сд
			// http://www.w3.org/TR/selectors/#pseudo-classes
			//���ʹ�ô�д��ĸ����Զ���α���򰴴�Сд�������ȼ�
			//��סsetFilters�̳���pseudos
			var args��
				fn = Expr.pseudos [α] || Expr.setFilters [pseudo.toLowerCase����] ||
					Sizzle.error����unsupported pseudo����+ pseudo��;

			//�û�����ʹ��createPseudo��ָʾ
			//�������˺�����Ҫ����
			//����Sizzle����������
			if��fn [expando]��{
				return fn��argument��;
			}

			//�����ֶԾ�ǩ����֧��
			if��fn.length> 1��{
				args = [α��α������������];
				����Expr.setFilters.hasOwnProperty��pseudo.toLowerCase��������
					markFunction��function��seed��matches��{
						var idx��
							ƥ��= fn�����ӣ���������
							i = matched.length;
						���� -  �� {
							idx = indexOf��seed��matched [i]��;
							seed [idx] =����ƥ��[idx] = matched [i]��;
						}
					}����
					function��elem��{
						return fn��elem��0��args��;
					};
			}

			����fn;
		}
	}��

	α��{
		//�����Ǹ��ӵ�α
		��not����markFunction��function��selector��{
			//�޼����ݸ���������ѡ����
			//���⴦��ǰ����β��
			//��Ϊ����ӵĿո�
			var input = []��
				results = []��
				matcher = compile��selector.replace��rtrim����$ 1������;

			����ƥ����[expando]��
				markFunction��function��seed��matches��context��xml��{
					var elem��
						unmatched = matcher��seed��null��xml��[]����
						i = seed.length;

					//ƥ��`matcher`�޷�ƥ���Ԫ��
					���� -  �� {
						if����elem = unmatched [i]����{
							seed [i] =����ƥ��[i] = elem��;
						}
					}
				}����
				function��elem��context��xml��{
					����[0] = elem;
					matcher�����룬null��xml�������;
					//��Ҫ����Ԫ�أ����⣣299��
					input [0] = null;
					return��results.pop����;
				};
		}����

		��has����markFunction��function��selector��{
			return������elem��{
				return Sizzle��selector��elem��.length> 0;
			};
		}����

		��contains����markFunction��function��text��{
			text = text.replace��runescape��funescape��;
			return������elem��{
				return��elem.textContent || elem.innerText || getText��elem������indexOf��text��> -1;
			};
		}����

		//��Ԫ���Ƿ��ɣ�lang����ѡ������ʾ
		//������Ԫ�ص�����ֵ
		//���ڱ�ʶ��C��
		//���Ա�ʶ��C��ͷ����������� - ����
		// C��Ԫ������ֵ��ƥ���ǲ����ִ�Сд�ġ�
		//��ʶ��C��������Ч���������ơ���
		// http://www.w3.org/TR/selectors/#lang-pseudo
		��lang����markFunction��function��lang��{
			// langֵ��������Ч�ı�ʶ��
			if����ridentifier.test��lang ||��������{
				Sizzle.error������֧��lang����+ lang��;
			}
			lang = lang.replace��runescape��funescape��.toLowerCase����;
			return������elem��{
				var elemLang;
				��{
					if����elemLang = documentIsHTML��
						elem.lang��
						elem.getAttribute����xml��lang����|| elem.getAttribute����lang��������{

						elemLang = elemLang.toLowerCase����;
						����elemLang === lang || elemLang.indexOf��lang +�� - ����=== 0;
					}
				} while����elem = elem.parentNode��&& elem.nodeType === 1��;
				�������;
			};
		}����

		//����
		��target����function��elem��{
			var hash = window.location && window.location.hash;
			return hash && hash.slice��1��=== elem.id;
		}��

		��root����function��elem��{
			return elem === docElem;
		}��

		�����㡱��function��elem��{
			return elem === document.activeElement &&����document.hasFocus || document.hasFocus������&& !!��elem.type || elem.href || ~elem.tabIndex��;
		}��

		//��������
		��enabled����function��elem��{
			return elem.disabled === false;
		}��

		��disabled����function��elem��{
			return elem.disabled === true;
		}��

		��checked����function��elem��{
			//��CSS3�У���checkedӦ����ѡ�к�ѡ�е�Ԫ��
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase����;
			return��nodeName ===��input��&& !! elem.checked��|| ��nodeName ===��option��&& !! elem.selected��;
		}��

		��selected����function��elem��{
			//���ʴ����Ի�Ĭ��ѡ��
			// Safari�е�ѡ����������
			if��elem.parentNode��{
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		}��

		//����
		��empty����function��elem��{
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//��empty��element��1�������ݽڵ㣨text��3; cdata��4; entity ref��5��ȡ����
			//�����������ˣ����ۣ�8;����ָ�7;�ȣ�
			// nodeType <6��Ч����Ϊattributes��2������ʾΪ����
			for��elem = elem.firstChild; elem; elem = elem.nextSibling��{
				if��elem.nodeType <6��{
					�������;
				}
			}
			����true;
		}��

		��parent����function��elem��{
			���أ�Expr.pseudos [��empty��]��elem��;
		}��

		//Ԫ��/��������
		��header����function��elem��{
			return rheader.test��elem.nodeName��;
		}��

		��input����function��elem��{
			return rinputs.test��elem.nodeName��;
		}��

		��button����function��elem��{
			var name = elem.nodeName.toLowerCase����;
			��������===�����롱&& elem.type ===����ť��|| name ===��button��;
		}��

		��text����function��elem��{
			var attr;
			return elem.nodeName.toLowerCase����===��input��&&
				elem.type ===��text��&&

				//֧�֣�IE <8
				//�µ�HTML5����ֵ�����硰����������elem.type ===��text��һ�����
				����attr = elem.getAttribute����type������== null || attr.toLowerCase����===��text����;
		}��

		//�ռ�λ��
		��first����createPositionalPseudo��function����{
			return [0];
		}����

		��last����createPositionalPseudo��function��matchIndexes��length��{
			����[���� -  1];
		}����

		��eq����createPositionalPseudo��function��matchIndexes��length��argument��{
			return [����<0��argument + length��argument];
		}����

		��even����createPositionalPseudo��function��matchIndexes��length��{
			var i = 0;
			for��; i <length; i + = 2��{
				matchIndexes.push��i��;
			}
			return matchIndexes;
		}����

		��odd����createPositionalPseudo��function��matchIndexes��length��{
			var i = 1;
			for��; i <length; i + = 2��{
				matchIndexes.push��i��;
			}
			return matchIndexes;
		}����

		��lt����createPositionalPseudo��function��matchIndexes��length��argument��{
			var i =����<0������+���ȣ�����;
			for��; --i> = 0;��{
				matchIndexes.push��i��;
			}
			return matchIndexes;
		}����

		��gt����createPositionalPseudo��function��matchIndexes��length��argument��{
			var i =����<0������+���ȣ�����;
			for��; ++ i <length;��{
				matchIndexes.push��i��;
			}
			return matchIndexes;
		}��
	}
};

Expr.pseudos [��nth��] = Expr.pseudos [��eq��];

//��Ӱ�ť/��������α
for��i in {radio��true��checkbox��true��file��true��password��true��image��true}��{
	Expr.pseudos [i] = createInputPseudo��i��;
}
for��i in {submit��true��reset��true}��{
	Expr.pseudos [i] = createButtonPseudo��i��;
}

//���ڴ�����setFilters��Easy API
function setFilters����{}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters����;

tokenize = Sizzle.tokenize = function��selector��parseOnly��{
	varƥ�䣬ƥ�䣬���ƣ����ͣ�
		soFar��groups��preFilters��
		cached = tokenCache [selector +����];

	if�����棩{
		return parseOnly��0��cached.slice��0��;
	}

	soFar =ѡ����;
	groups = [];
	preFilters = Expr.preFilter;

	while��soFar��{

		//���ź͵�һ������
		if����matched ||��match = rcomma.exec��soFar������{
			if��match��{
				//��Ҫ��β�涺����Ϊ��Ч
				soFar = soFar.slice��ƥ��[0] .length��|| ����;
			}
			groups.push����tokens = []����;
		}

		matched = false;

		//���
		if����match = rcombinators.exec��soFar������{
			matched = match.shift����;
			tokens.push��{
				��ֵ��ƥ�䣬
				//����������Ͷ�䵽̫��
				type��match [0] .replace��rtrim��������
			}��;
			soFar = soFar.slice��matched.length��;
		}

		//������
		for����Expr.filter�����룩{
			if����match = matchExpr [type] .exec��soFar����&&����preFilters [type] ||
				��match = preFilters [type]��match��������{
				matched = match.shift����;
				tokens.push��{
					��ֵ��ƥ�䣬
					���ͣ����ͣ�
					ƥ�䣺ƥ��
				}��;
				soFar = soFar.slice��matched.length��;
			}
		}

		if����matched��{
			����;
		}
	}

	//������Ч����ĳ���
	//�������ֻ�ǽ���
	//�����׳�����򷵻�����
	return parseOnly��
		soFar.length��
		���� ��
			Sizzle.error��ѡ��������
			//��������
			tokenCache��selector��groups��.slice��0��;
};

function toSelector��tokens��{
	var i = 0��
		len = tokens.length��
		selector =����;
	for��; i <len; i ++��{
		selector + = tokens [i] .value;
	}
	����ѡ����;
}

function addCombinator��matcher��combinator��base��{
	var dir = combinator.dir��
		checkNonElements = base && dir ===��parentNode����
		doneName = done ++;

	����combinator.first��
		//������������/ǰһ��Ԫ��
		function��elem��context��xml��{
			while����elem = elem [dir]����{
				if��elem.nodeType === 1 || checkNonElements��{
					return matcher��elem��context��xml��;
				}
			}
		}��

		//�����������/ǰ���Ԫ��
		function��elem��context��xml��{
			var oldCache��outerCache��
				newCache = [dirruns��doneName];

			//�����޷���XML�ڵ��������������ݣ�������ǲ���������dir����
			if��xml��{
				while����elem = elem [dir]����{
					if��elem.nodeType === 1 || checkNonElements��{
						if��matcher��elem��context��xml����{
							����true;
						}
					}
				}
			} else {
				while����elem = elem [dir]����{
					if��elem.nodeType === 1 || checkNonElements��{
						outerCache = elem [expando] || ��elem [expando] = {}��;
						if����oldCache = outerCache [dir]��&&
							oldCache [0] === dirruns && oldCache [1] === doneName��{

							//�����newCache���Ա������򴫲�����ǰ��Ԫ��
							return��newCache [2] = oldCache [2]��;
						} else {
							//����newcache��ʹ������򴫲���ǰ���Ԫ��
							outerCache [dir] = newCache;

							//һ��������ζ�������Ѿ������; ʧ����ζ�����Ǳ���������
							if����newCache [2] = matcher��elem��context��xml������{
								����true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher��matchers��{
	return matchers.length> 1��
		function��elem��context��xml��{
			var i = matchers.length;
			���� -  �� {
				if����matchers [i]��elem��context��xml����{
					�������;
				}
			}
			����true;
		}��
		ƥ����[0];
}

function multipleContexts��selector��contexts��results��{
	var i = 0��
		len = contexts.length;
	for��; i <len; i ++��{
		Sizzle��ѡ������������[i]�������;
	}
	���ؽ��;
}

function condense��unmatched��map��filter��context��xml��{
	var elem��
		newUnmatched = []��
		i = 0��
		len = unmatched.length��
		mapped = map��= null;

	for��; i <len; i ++��{
		if����elem = unmatched [i]����{
			if����filter || filter��elem��context��xml����{
				newUnmatched.push��elem��;
				if��mapped��{
					map.push��i��;
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher��preFilter��selector��matcher��postFilter��postFinder��postSelector��{
	if��postFilter &&��postFilter [expando]��{
		postFilter = setMatcher��postFilter��;
	}
	if��postFinder &&��postFinder [expando]��{
		postFinder = setMatcher��postFinder��postSelector��;
	}
	return markFunction��function��seed��results��context��xml��{
		var temp��i��elem��
			preMap = []��
			postMap = []��
			preexisting = results.length��

			//�����ӻ��������л�ȡ��ʼԪ��
			elems =����|| multipleContexts��selector ||��*����context.nodeType��[context]��context��[]����

			// Prefilter��ȡƥ�������룬�������ӽ��ͬ����ӳ��
			matcherIn = preFilter &&��seed ||��selector����
				ѹ����elems��preMap��preFilter��context��xml����
				elems�ģ�

			matcherOut = matcher��
				//���������postFinder������˵����ӣ��������postFilter��Ԥ�ȴ��ڵĽ����
				postFinder || �����ӣ�preFilter��preexisting || postFilter����

					// ...�м䴦���Ǳ�Ҫ��
					[]��

					// ...����ֱ��ʹ�ý��
					�����
				matcherIn;

		//������Ҫƥ����
		if��matcher��{
			matcher��matcherIn��matcherOut��context��xml��;
		}

		//Ӧ��postFilter
		if��postFilter��{
			temp = condense��matcherOut��postMap��;
			postFilter��temp��[]��context��xml��;

			//ͨ����ʧ�ܵ�Ԫ���ƻ�matcherIn��ʹ��ʧ��
			i = temp.length;
			���� -  �� {
				if����elem = temp [i]����{
					matcherOut [postMap [i]] =����matcherIn [postMap [i]] = elem��;
				}
			}
		}

		if��seed��{
			if��postFinder || preFilter��{
				if��postFinder��{
					//ͨ�������м���ѹ����postFinder������������ȡ���յ�matcherOut
					temp = [];
					i = matcherOut.length;
					���� -  �� {
						if����elem = matcherOut [i]����{
							//�ָ�matcherIn��Ϊelem����������ƥ��
							temp.push����matcherIn [i] = elem����;
						}
					}
					postFinder��null����matcherOut = []����temp��xml��;
				}

				//��ƥ���Ԫ�ش������ƶ��������ʹ���Ǳ���ͬ��
				i = matcherOut.length;
				���� -  �� {
					if����elem = matcherOut [i]��&&
						��temp = postFinder��indexOf��seed��elem����preMap [i]��> -1��{

						seed [temp] =����results [temp] = elem��;
					}
				}
			}

		//����Ѷ��壬��ͨ��postFinder��Ԫ����ӵ������
		} else {
			matcherOut =Ũ����
				matcherOut ===�����
					matcherOut.splice��preexisting��matcherOut.length����
					matcherOut
			��;
			if��postFinder��{
				postFinder��null��results��matcherOut��xml��;
			} else {
				push.apply��results��matcherOut��;
			}
		}
	}��;
}

function matcherFromTokens��tokens��{
	var checkContext��matcher��j��
		len = tokens.length��
		leadingRelative = Expr.relative [tokens [0] .type]��
		implicitRelative = leadingRelative || Expr.relative [����]��
		��=������ԣ�1��0��

		//����ƥ����ȷ��Ԫ�ؿɴӶ��������ķ���
		matchContext = addCombinator��function��elem��{
			return elem === checkContext;
		}��implicitRelative��true����
		matchAnyContext = addCombinator��function��elem��{
			return indexOf��checkContext��elem��> -1;
		}��implicitRelative��true����
		matchers = [function��elem��context��xml��{
			var ret =����leadingRelative &&��xml || context��== outermostContext����|| ��
				��checkContext = context��.nodeType��
					matchContext��elem��context��xml����
					matchAnyContext��elem��context��xml����;
			//�������Ԫ���ϣ����⣣299��
			checkContext = null;
			����;
		}];

	for��; i <len; i ++��{
		if����matcher = Expr.relative [tokens [i] .type]����{
			matchers = [addCombinator��elementMatcher��matchers����matcher��];
		} else {
			matcher = Expr.filter [tokens [i] .type] .apply��null��tokens [i] .matches��;

			//�ڿ���λ��ƥ�����󷵻��������
			if��matcher [expando]��{
				//�ҵ���һ����������������У��Ա���ȷ����
				j = ++ i;
				for��; j <len; j ++��{
					if��Expr.relative [tokens [j] .type]��{
						����;
					}
				}
				return setMatcher��
					i> 1 && elementMatcher��matchers����
					i> 1 && toSelector��
						//���ǰ��ı���Ǻ������ӣ������һ����ʽ������Ԫ��`*`
						tokens.slice��0��i  -  1��.concat��{value��tokens [i  -  2] .type ===��������*��������}��
					��.replace��rtrim����$ 1������
					ƥ�䣬
					��<j && matcherFromTokens��tokens.slice��i��j������
					j <len && matcherFromTokens����tokens = tokens.slice��j��������
					j <len && toSelector�����ƣ�
				��;
			}
			matchers.push��matcher��;
		}
	}

	return elementMatcher��matchers��;
}

function matcherFromGroupMatchers��elementMatchers��setMatchers��{
	var bySet = setMatchers.length> 0��
		byElement = elementMatchers.length> 0��
		superMatcher = function��seed��context��xml��results��outermost��{
			var elem��j��matcher��
				matchedCount = 0��
				i =��0����
				unmatched = seed && []��
				setMatched = []��
				contextBackup = outermostContext��
				//���Ǳ���ʼ��ӵ������Ԫ�ػ�������������
				elems =����|| byElement && Expr.find [��TAG��]����*��������㣩��
				//ʹ������dirruns iff����������ƥ����
				dirrunsUnique =��dirruns + = contextBackup == null��1��Math.random����|| 0.1����
				len = elems.length;

			if��outermost��{
				outermostContext = context��== document && context;
			}

			//��ӽ�elementMatchersֱ�Ӵ��ݸ������Ԫ��
			//���û��Ԫ�أ��뽫`i`����Ϊ�ַ������Ա�`matchedCount`������Ϊ��00��
			//֧�֣�IE <9��Safari
			//ͨ��id����NodeList���ԣ�IE����length��; Safari��<number>��ƥ��Ԫ��
			for��; i��== len &&��elem = elems [i]����= null; i ++��{
				if��byElement && elem��{
					j = 0;
					while����matcher = elementMatchers [j ++]����{
						if��matcher��elem��context��xml����{
							results.push��elem��;
							����;
						}
					}
					if��outermost��{
						dirruns = dirrunsUnique;
					}
				}

				//�������ù������Ĳ�ƥ��Ԫ��
				if��bySet��{
					//���ǽ��������п��ܵ�ƥ��
					if����elem =��matcher && elem����{
						matchedCount--;
					}

					//Ϊÿ��Ԫ���ӳ����飬ƥ�����
					if��seed��{
						unmatched.push��elem��;
					}
				}
			}

			//�����Ϲ�����Ӧ���ڲ�ƥ���Ԫ��
			matchedCount + = i;
			if��bySet && i��== matchedCount��{
				j = 0;
				while����matcher = setMatchers [j ++]����{
					matcher����ƥ�䣬setMatched��context��xml��;
				}

				if��seed��{
					//��������Ԫ��ƥ���������������Ҫ
					if��matchedCount> 0��{
						���� -  �� {
							if������unmatched [i] || setMatched [i]����{
								setMatched [i] = pop.call��results��;
							}
						}
					}

					//��������ռλ��ֵ�Խ���ȡʵ��ƥ��
					setMatched = condense��setMatched��;
				}

				//Ϊ������ƥ����
				push.apply��results��setMatched��;

				//�޺˼�ƥ��ɹ�ƥ�����ɹ���ƥ�����涨����
				if��outermost &&��seed && setMatched.length> 0 &&
					��matchedCount + setMatchers.length��> 1��{

					Sizzle.uniqueSort�������;
				}
			}

			//ͨ��Ƕ��ƥ��������ȫ�ֱ����Ĳ���
			if��outermost��{
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			�ع������ױ�;
		};

	����bySet��
		markFunction��superMatcher����
		superMatcher;
}

compile = Sizzle.compile = function��selector��match / *�����ڲ�ʹ��* /��{
	var i��
		setMatchers = []��
		elementMatchers = []��
		cached = compilerCache [selector +����];

	if����cached��{
		//���ɵݹ麯���ĺ����������ڼ��ÿ��Ԫ��
		if����match��{
			match = tokenize��selector��;
		}
		i = match.length;
		���� -  �� {
			cached = matcherFromTokens��match [i]��;
			if��cached [expando]��{
				setMatchers.push��cached��;
			} else {
				elementMatchers.push��cached��;
			}
		}

		//�����ѱ���ĺ���
		cached = compilerCache��selector��matcherFromGroupMatchers��elementMatchers��setMatchers����;

		//����ѡ�����ͱ�ǻ�
		cached.selector = selector;
	}
	���ػ���;
};

/ **
 *�ͼ�ѡ���ܣ�������Sizzle�ı���
 *ѡ��������
 * @param {String | Function}ѡ����ѡ������Ԥ������
 *ʹ��Sizzle.compile������ѡ��������
 * @param {Element}������
 * @param {����} [���]
 * @param {Array} [seed]Ҫƥ���һ��Ԫ��
 * /
select = Sizzle.select = function��ѡ�����������ģ���������ӣ�{
	var i�����ƣ����ƣ����ͣ����ң�
		compiled = typeof selector ===��function��&& selector��
		match =��seed && tokenize����selector = compiled.selector || selector����;

	���=���|| [];

	//���û��������ֻ��һ���飬�볢����С������
	if��match.length === 1��{

		//�����ѡ������ID����ѡ���ݷ�ʽ������������
		tokens = match [0] = match [0] .slice��0��;
		if��tokens.length> 2 &&��token = tokens [0]����type ===��ID��&&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative [tokens [1] .type]��{

			context =��Expr.find [��ID��]��token.matches [0] .replace��runescape��funescape����context��|| []��[0];
			if����context��{
				���ؽ��;

			//Ԥ�����ƥ������Ȼ����֤���ȣ��������һ������
			} else if��compiled��{
				context = context.parentNode;
			}

			selector = selector.slice��tokens.shift������value.length��;
		}

		//��ȡ���ҵ���ƥ������Ӽ�
		i = matchExpr [��needsContext��]��test��selector����0��tokens.length;
		���� -  �� {
			token = tokens [i];

			//������ǻ������������ֹ
			if��Expr.relative [��type = token.type��]��{
				����;
			}
			if����find = Expr.find [type]����{
				//��������չ��Ҫ�ֵ��������������
				if����seed = find��
					token.matches [0] .replace��runescape��funescape����
					rsibling.test��tokens [0] .type��&& testContext��context.parentNode��|| ������
				������{

					//��������ǿյĻ�û�����ƣ����ǿ�����ǰ����
					tokens.splice��i��1��;
					selector = seed.length && toSelector��tokens��;
					if����selector��{
						push.apply����������ӣ�;
						���ؽ��;
					}

					����;
				}
			}
		}
	}

	//���δ�ṩ���˹��ܣ�����벢ִ�й��˹���
	//��������޸��������ѡ���������ṩ`match`�Ա�������ʶ��
	������|| compile��ѡ������ƥ�䣩����
		���ӣ�
		�����£�
		��documentIsHTML��
		�����
		rsibling.test��selector��&& testContext��context.parentNode��|| ������
	��;
	���ؽ��;
};

//һ������ҵ

//�����ȶ���
support.sortStable = expando.split����������sort��sortOrder��.join��������=== expando;

//֧�֣�Chrome 14-35 +
//���δ���ݸ��ȽϺ�������ʼ�ռ����ظ�
support.detectDuplicates = !! hasDuplicate;

//���Ĭ���ĵ���ʼ��
setDocument����;

//֧�֣�Webkit <537.32  -  Safari 6.0.3 / Chrome 25����Chrome 27���޸���
//����Ľڵ�����ظ���*�˴�*
support.sortDetached = assert��function��div1��{
	//Ӧ����1��������4�����£�
	return div1.compareDocumentPosition��document.createElement����div��������1;
}��;

//֧�֣�IE <8
//��ֹ����/���ԡ���ֵ��
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if����assert��function��div��{
	div.innerHTML =��<a href='#'> </a>��;
	return div.firstChild.getAttribute����href����===������;
}����{
	addHandle����type | href | height | width����function��elem��name��isXML��{
		if����isXML��{
			return elem.getAttribute��name��name.toLowerCase����===��type����1��2��;
		}
	}��;
}

//֧�֣�IE <9
//ʹ��defaultValue����getAttribute����value����
if����support.attributes ||��assert��function��div��{
	div.innerHTML =��<input />��;
	div.firstChild.setAttribute����value����������;
	return div.firstChild.getAttribute����value����===����;
}����{
	addHandle����value����function��elem��name��isXML��{
		if����isXML && elem.nodeName.toLowerCase����===��input����{
			return elem.defaultValue;
		}
	}��;
}

//֧�֣�IE <9
//��getAttribute����ʱ��ʹ��getAttributeNode��ȡ����ֵ
if����assert��function��div��{
	return div.getAttribute����disabled����== null;
}����{
	addHandle������ֵ��������elem��name��isXML��{
		var val;
		if����isXML��{
			return elem [name] === true��name.toLowerCase������
					��val = elem.getAttributeNode��name����&& val.specified��
					val.value��
				��ֵ;
		}
	}��;
}

����˻˻��;

}�������ڣ�;



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr [������] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag =��/ ^ <��\ w +��\ s * \ /��>������<\ / \ 1> |��$ /��;



var risSimple = /^��[^��#\ [����] {$ /;

//Ϊ������ʵ����ͬ�Ĺ��ܶ�����
function winnow��elements��qualifier��not��{
	if��jQuery.isFunction��qualifier����{
		return jQuery.grep��elements��function��elem��i��{
			/ * jshint -W018 * /
			return !! qualifier.call��elem��i��elem����== not;
		}��;

	}

	if��qualifier.nodeType��{
		return jQuery.grep��elements��function��elem��{
			return��elem === qualifier����== not;
		}��;

	}

	if��typeof qualifier ===��string����{
		if��risSimple.test��qualifier����{
			return jQuery.filter���޶�����Ԫ�أ����ǣ�;
		}

		qualifier = jQuery.filter���޶�����Ԫ�أ�;
	}

	return jQuery.grep��elements��function��elem��{
		return��indexOf.call��qualifier��elem��> = 0����== not;
	}��;
}

jQuery.filter = function��expr��elems��not��{
	var elem = elems [0];

	����� �� {
		expr =����not����+ expr +������;
	}

	return elems.length === 1 && elem.nodeType === 1��
		jQuery.find.matchesSelector��elem��expr����[elem]��[]��
		jQuery.find.matches��expr��jQuery.grep��elems��function��elem��{
			return elem.nodeType === 1;
		}����;
};

1.3�У�{
	find��function��selector��{
		var i��
			len = this.length��
			ret = []��
			self = this;

		if��typeof selector��==��string����{
			return this.pushStack��jQuery��selector��.filter��function����{
				for��i = 0; i <len; i ++��{
					if��jQuery.contains��self [i]��this����{
						����true;
					}
				}
			}��;;
		}

		for��i = 0; i <len; i ++��{
			jQuery.find��selector��self [i]��ret��;
		}

		//��Ҫ��Ϊ$��ѡ�����������ģ����$��context��.find��selector��
		ret = this.pushStack��len> 1��jQuery.unique��ret����ret��;
		ret.selector = this.selector��this.selector +����+ѡ������ѡ����;
		����;
	}��
	filter��function��selector��{
		return this.pushStack��winnow��this��selector || []��false����;
	}��
	not��function��selector��{
		return this.pushStack��winnow��this��selector || []��true����;
	}��
	�ǣ�function��selector��{
		����!! winnow��
			�����

			//�������λ��/���ѡ���������鷵�ؼ����еĳ�Ա�ʸ�
			// so $����p��first������is����p��last�������ڴ���������p����doc���᷵��true��
			typeof selector ===��string��&& rneedsContext.test��selector����
				jQuery��ѡ��������
				ѡ����|| []��
			��
		��������;
	}
}��;


//��ʼ��һ��jQuery����


//�Ը�jQuery���ĵ�������������
var rootjQuery��

	//���HTML�ַ����ļ򵥷���
	//����#id <tag>�Ա���XSSͨ��location.hash����9521��
	//�ϸ��HTMLʶ�𣨣�11290��������<��ͷ��
	rquickExpr = / ^������\ s *��<[\ w \ W] +>��[^>] * |����[\ w  - ] *����$ /��

	init = jQuery.fn.init = function��selector��context��{
		var match��elem;

		// HANDLE��$����������$��null����$��undefined����$��false��
		if����selector��{
			�黹���;
		}

		//����HTML�ַ���
		if��typeof selector ===��string����{
			if��selector [0] ===��<��&& selector [selector.length  -  1] ===��>��&& selector.length> = 3��{
				//������<>��ͷ�ͽ�β���ַ�����HTML������������ʽ���
				match = [null��selector��null];

			} else {
				match = rquickExpr.exec��selector��;
			}

			//ƥ��html��ȷ��û��Ϊ#idָ��������
			if��match &&��match [1] ||��context����{

				// HANDLE��$��html�� - > $�����飩
				if��match [1]��{
					context =������ʵ��jQuery��context [0]��context;

					//����back-compat�����нű���ѡ������ȷ��
					//���parseHTML�����ڣ������׳�����
					jQuery.merge��this��jQuery.parseHTML��
						ƥ��[1]��
						context && context.nodeType��context.ownerDocument || �����ģ��ļ���
						����
					����;

					// HANDLE��$��html��props��
					if��rsingleTag.test��match [1]��&& jQuery.isPlainObject��context����{
						for������������ƥ�䣩{
							//������ܣ��������ĵ����Գ�Ϊ����
							if��jQuery.isFunction��this [match]����{
								��[ƥ��]��context [match]��;

							// ...����������ʽ����Ϊ����
							} else {
								this.attr��match��context [match]��;
							}
						}
					}

					�黹���;

				// HANDLE��$����id��
				} else {
					elem = document.getElementById��match [2]��;

					//֧�֣�Blackberry 4.6
					// gEBID���ٷ����ĵ��еĽڵ㣨��6963��
					if��elem && elem.parentNode��{
						//��Ԫ��ֱ��ע��jQuery����
						this.length = 1;
						��[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					�黹���;
				}

			// HANDLE��$��expr��$��...����
			} else if����context || context.jquery��{
				return��context || rootjQuery��.find��selector��;

			// HANDLE��$��expr��context��
			//�����൱�ڣ�$��context��.find��expr��
			} else {
				return this.constructor��context��.find��selector��;
			}

		//�ֱ���$��DOMElement��
		} else if��selector.nodeType��{
			this.context = this [0] = selector;
			this.length = 1;
			�黹���;

		//�ֱ���$�����ܣ�
		//׼���ļ��Ŀ�ݷ�ʽ
		} else if��jQuery.isFunction��selector����{
			return typeof rootjQuery.ready��==��undefined����
				rootjQuery.ready��selector����
				//���û��׼��������ִ��
				selector��jQuery��;
		}

		if��selector.selector��== undefined��{
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray��selector��this��;
	};

//Ϊinit�����ṩjQueryԭ���Թ��Ժ�ʵ����
init.prototype = jQuery.fn;

//��ʼ�����Ĳο�
rootjQuery = jQuery��document��;


var rparentsprev = / ^������parents | prev��?: Until | All����/��
	//��Ψһ����ʼʱ����֤����Ψһ���ķ���
	guaranteeUnique = {
		���ӣ��ǵģ�
		���ݣ�true��
		��һ�����ǵģ�
		��һƪ�����
	};

jQuery.extend��{
	dir��function��elem��dir��until��{
		var matched = []��
			truncate = until��== undefined;

		while����elem = elem [dir]��&& elem.nodeType��== 9��{
			if��elem.nodeType === 1��{
				if��truncate && jQuery��elem��.is��until����{
					����;
				}
				matched.push��elem��;
			}
		}
		����ƥ��;
	}��

	�ֵܣ�function��n��elem��{
		var matched = [];

		for��; n; n = n.nextSibling��{
			if��n.nodeType === 1 && n��== elem��{
				matched.push��n��;
			}
		}

		����ƥ��;
	}
}��;

1.3�У�{
	has��function��target��{
		var targets = jQuery��target��this����
			l = targets.length;

		return this.filter��function����{
			var i = 0;
			for��; i <l; i ++��{
				if��jQuery.contains��this��targets [i]����{
					����true;
				}
			}
		}��;
	}��

	����ģ�������ѡ�����������ģ�{
		var cur��
			i = 0��
			l = this.length��
			ƥ��= []��
			pos = rneedsContext.test��ѡ������|| typeof selectors��==��string����
				jQuery��ѡ������������|| this.context����
				0;

		for��; i <l; i ++��{
			for��cur = this [i]; cur && cur��== context; cur = cur.parentNode��{
				//ʼ�������ĵ�Ƭ��
				if��cur.nodeType <11 &&��pos��
					pos.index��cur��> -1��

					//��Ҫ����Ԫ�ش��ݸ�Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector��cur��selectors������{

					matched.push��cur��;
					����;
				}
			}
		}

		return this.pushStack��matched.length> 1��jQuery.unique��matched����matched��;
	}��

	//ȷ��������Ԫ�ص�λ��
	index��function��elem��{

		//û�в������ڸ����з�������
		if����elem��{
			return��this [0] && this [0] .parentNode����this.first������prevAll������length��-1;
		}

		//ѡ�����е�����
		if��typeof elem ===��string����{
			return indexOf.call��jQuery��elem����this [0]��;
		}

		//�ҵ�����Ԫ�ص�λ��
		return indexOf.call�������

			//����յ�jQuery������ʹ�õ�һ��Ԫ��
			elem.jquery��elem [0]��elem
		��;
	}��

	add��function��selector��context��{
		return this.pushStack��
			jQuery.unique��
				jQuery.merge��this.get������jQuery��selector��context����
			��
		��;
	}��

	addBack��function��selector��{
		return this.add��selector == null��
			this.prevObject��this.prevObject.filter��selector��
		��;
	}
}��;

function sibling��cur��dir��{
	while����cur = cur [dir]��&& cur.nodeType��== 1��{}
	�ع�
}

jQuery.each��{
	parent��function��elem��{
		var parent = elem.parentNode;
		return parent && parent.nodeType��== 11��parent��null;
	}��
	��ĸ��function��elem��{
		return jQuery.dir��elem����parentNode����;
	}��
	parentsUntil��function��elem��i��until��{
		����jQuery.dir��elem����parentNode����ֱ����;
	}��
	next��function��elem��{
		�����ֵܣ�elem����nextSibling����;
	}��
	��һƪ��function��elem��{
		�����ֵܣ�elem����previousSibling����;
	}��
	nextAll��function��elem��{
		return jQuery.dir��elem����nextSibling����;
	}��
	prevAll��function��elem��{
		return jQuery.dir��elem����previousSibling����;
	}��
	nextUntil��function��elem��i��until��{
		����jQuery.dir��elem����nextSibling����ֱ����;
	}��
	prevUntil��function��elem��i��until��{
		����jQuery.dir��elem����previousSibling����ֱ����;
	}��
	�ֵܽ��ã�function��elem��{
		return jQuery.sibling����elem.parentNode || {}����firstirstChild��elem��;
	}��
	children��function��elem��{
		return jQuery.sibling��elem.firstChild��;
	}��
	���ݣ�function��elem��{
		return elem.contentDocument || jQuery.merge��[]��elem.childNodes��;
	}
}��function��name��fn��{
	jQuery.fn [name] = function��until��selector��{
		var matched = jQuery.map��this��fn��until��;

		if��name.slice��-5����==��Until����{
			selector = until;
		}

		if��selector && typeof selector ===��string����{
			matched = jQuery.filter��selector��matched��;
		}

		if��this.length> 1��{
			//ɾ���ظ���
			if����guaranteedUnique [name]��{
				jQuery.unique��ƥ�䣩;
			}

			//��ĸ*��ǰ����Ʒ������
			if��rparentsprev.test��name����{
				matched.reverse����;
			}
		}

		return this.pushStack��matching��;
	};
}��;
var rnotwhite =��/ \ S + / g��;



// String to Objectѡ���ʽ����
var optionsCache = {};

//���ַ�����ʽ��ѡ��ת��Ϊ�����ʽ��ѡ��洢�ڻ�����
function createOptions��options��{
	var object = optionsCache [options] = {};
	jQuery.each��options.match��rnotwhite��|| []��function��_��flag��{
		object [flag] = true;
	}��;
	���ض���;
}

/ *
 *ʹ�����²��������ص��б�
 *
 *ѡ�һ����ѡ�Ŀո�ָ�ѡ���б������ı䷽ʽ
 *�ص��б���ֻ����ͳ��ѡ�����
 *
 *Ĭ������£��ص��б����¼��ص��б�һ��������
 *��Ρ���͡���
 *
 *���ܵ�ѡ��
 *
 *һ�Σ���ȷ���ص��б�ֻ�ܱ�����һ�Σ������ڣ�
 *
 * memory����������ǰ��ֵ����������ӵ��κλص�
 *�б����������µġ����䡱��ȼ��
 *ֵ�������ڣ�
 *
 * unique����ȷ���ص�ֻ�����һ�Σ��б���û���ظ���
 *
 * stopOnFalse�����ص�����falseʱ�жϵ���
 *
 * /
jQuery.Callbacks = function��options��{

	//�����Ҫ����ѡ���String��ʽת��ΪObject��ʽ
	//�������ȼ�黺�棩
	options = typeof options ===��string����
		��optionsCache [options] || createOptions��options������
		jQuery.extend��{}��options��;

	var //�ϴδ���ֵ�����ڲ������ǵ��б�
		���䣬
		//����Ƿ��Ѵ����б�
		��ͣ�
		//����б�ǰ�Ƿ����ڴ���
		�����
		//��һ�λػ���add��fireWith�ڲ�ʹ�ã�
		firingStart��
		//���ʱѭ������
		firingLength��
		//��ǰ�����ص��������������Ҫ������ɾ����
		firingIndex��
		//ʵ�ʻص��б�
		list = []��
		//��ջ�Ļ�����Ҫ���ظ����б�
		stack =��options.once && []��
		// Fire�ص�
		fire = function��data��{
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for��; list && firingIndex <firingLength; firingIndex ++��{
				if��list [firingIndex] .apply��data [0]��data [1]��=== false && options.stopOnFalse��{
					memory = false; //��ֹʹ��add��һ������
					����;
				}
			}
			fired = false;
			if��list��{
				if��stack��{
					if��stack.length��{
						fire��stack.shift������;
					}
				} else if��memory��{
					list = [];
				} else {
					self.disable����;
				}
			}
		}��
		//ʵ�ʻص�����
		self = {
			//���ص���ص�������ӵ��б���
			add��function����{
				if��list��{
					//���ȣ����Ǳ��浱ǰ�ĳ���
					var start = list.length;
					��function add��args��{
						jQuery.each��args��function��_��arg��{
							var type = jQuery.type��arg��;
							if��type ===��function����{
								if����options.unique ||��self.has��arg����{
									list.push��arg��;
								}
							} else if��arg && arg.length && type��==��string����{
								//�ݹ���
								add��arg��;
							}
						}��;
					}����������;
					//������Ҫ���ص���ӵ�
					//��ǰ�������Σ�
					if��fired��{
						firingLength = list.length;
					//���ڼ��䣬�������û�������ô
					//����Ӧ�����̴�绰
					} else if��memory��{
						firingStart = start;
						�𣨼��䣩;
					}
				}
				�黹���;
			}��
			//���б���ɾ���ص�
			remove��function����{
				if��list��{
					jQuery.each��arguments��function��_��arg��{
						varָ��;
						while����index = jQuery.inArray��arg��list��index����> -1��{
							list.splice��index��1��;
							//����������
							if��fired��{
								if��index <= firingLength��{
									firingLength--;
								}
								if��index <= firingIndex��{
									firingIndex--;
								}
							}
						}
					}��;
				}
				�黹���;
			}��
			//�������Ļص��Ƿ����б��С�
			//���û�и����������򷵻��б��Ƿ񸽼��˻ص���
			has��function��fn��{
				����fn��jQuery.inArray��fn��list��> -1��!!��list && list.length��;
			}��
			//���б���ɾ�����лص�
			empty��function����{
				list = [];
				firingLength = 0;
				�黹���;
			}��
			//���б������κ�����
			disable��function����{
				list = stack = memory = undefined;
				�黹���;
			}��
			//������������
			disabled��function����{
				return��list;
			}��
			//���б�����Ϊ��ǰ״̬
			lock��function����{
				stack = undefined;
				if����memory��{
					self.disable����;
				}
				�黹���;
			}��
			//������������
			��������function����{
				���أ���ջ;
			}��
			//ʹ�ø����������ĺͲ����������лص�
			fireWith��function��context��args��{
				if��list &&����fired || stack����{
					args = args || [];
					args = [context��args.slice��args.slice������args];
					if��fired��{
						stack.push��args��;
					} else {
						��args��;
					}
				}
				�黹���;
			}��
			//ʹ�ø����Ĳ����������лص�
			fire��function����{
				self.fireWith��this��arguments��;
				�黹���;
			}��
			//֪���ص������Ƿ����ٱ����ù�һ��
			fired��function����{
				����!!���
			}
		};

	�ع�����;
};


jQuery.extend��{

	���ڣ�function��func��{
		var tuples = [
				//������������������������б�����״̬
				[��resolve������done����jQuery.Callbacks�����������䡱�������ѽ����]��
				[���ܾ�������ʧ�ܡ���jQuery.Callbacks����һ�μ��䡱�������ܾ���]��
				[��notify������progress����jQuery.Callbacks����memory����]
			]
			state =��pending����
			promise = {
				state��function����{
					����״̬;
				}��
				���ǣ�function����{
					deferred.done��arguments��.fail��arguments��;
					�黹���;
				}��
				then��function��/ * fnDone��fnFail��fnProgress * /��{
					var fns = arguments;
					return jQuery.Deferred��function��newDefer��{
						jQuery.each��Ԫ�飬������i��tuple��{
							var fn = jQuery.isFunction��fns [i]��&& fns [i];
							//�ӳ�[���| ʧ��| ������ת����newDefer�Ľ���]
							deferred [tuple [1]]��function����{
								var returns = fn && fn.apply��this��arguments��;
								if������&& jQuery.isFunction��returned.promise����{
									returned.promise����
										.done��newDefer.resolve��
										.fail��newDefer.reject��
										.progress��newDefer.notify��;
								} else {
									newDefer [tuple [0] +��With��]����= = promise��newDefer.promise������this��fn��[return]��arguments��;
								}
							}��;
						}��;
						fns = null;
					}����ŵ�ԣ���;
				}��
				//������ڵĳ�ŵ
				//����ṩ��obj����promise������ӵ�������
				promise��function��obj��{
					return obj��= null��jQuery.extend��obj��promise����promise;
				}
			}��
			deferred = {};

		//���ֹܵ��Խ��з���
		promise.pipe = promise.then;

		//����ض����б�ķ���
		jQuery.each��Ԫ�飬������i��tuple��{
			var list = tuple [2]��
				stateString = tuple [3];

			//��ŵ[���| ʧ��| ��չ] = list.add
			promise [tuple [1]] = list.add;

			//����״̬
			if��stateString��{
				list.add��function����{
					// state = [�ѽ��| ���ܾ� ]
					state = stateString;

				// [reject_list | resolve_list] .disable; progress_list.lock
				}��tuples [i ^ 1] [2] .disable��tuples [2] [2] .lock��;
			}

			//�ӳ�[resolve | �ܾ�| ֪ͨ]
			deferred [tuple [0]] = function����{
				deferred [tuple [0] +��With��]����= = deferred��promise��this��arguments��;
				�黹���;
			};
			deferred [tuple [0] +��With��] = list.fireWith;
		}��;

		//ʹ���ڳ�ŵ
		promise.promise�����ڣ�;

		//����еĻ����ø����ĺ���
		if��func��{
			func.call���ӳ٣����ڣ�;
		}

		// ȫ����ɣ�
		�����˻�;
	}��

	//���ڰ�����
	when��function��subordinate / *��...��subordinateN * /��{
		var i = 0��
			resolveValues = slice.call��arguments����
			length = resolveValues.length��

			//δ��ɵ�����������
			ʣ��=���ȣ�== 1 || ��subordinate && jQuery.isFunction��subordinate.promise���������ȣ�0��

			//�������ڡ����resolveValuesֻ����һ��Deferred���Ǿ�ʹ������
			�ӳ�=ʣ��=== 1��subordinate��jQuery.Deferred������

			//���½����ͽ���ֵ�Ĺ���
			updateFunc = function��i��contexts��values��{
				return������ֵ��{
					������[i] =���;
					values [i] = arguments.length> 1��slice.call��arguments����value;
					if��values === progressValues��{
						deferred.notifyWith��contexts��values��;
					} else if������--remaining����{
						deferred.resolveWith��contexts��values��;
					}
				};
			}��

			progressValues��progressContexts��resolveContexts;

		//����������ӵ�Deferred����; �ѱ�����Ϊ�ѽ��
		if��length> 1��{
			progressValues = new Array��length��;
			progressContexts = new Array��length��;
			resolveContexts = new Array��length��;
			for��; i <length; i ++��{
				if��resolveValues [i] && jQuery.isFunction��resolveValues [i] .promise����{
					resolveValues [i] .promise����
						.done��updateFunc��i��resolveContexts��resolveValues����
						.fail��deferred.reject��
						.progress��updateFunc��i��progressContexts��progressValues����;
				} else {
					--remaining;
				}
			}
		}

		//������ǲ����κ����飬������������
		if����remaining��{
			deferred.resolveWith��resolveContexts��resolveValues��;
		}

		return deferred.promise����;
	}
}��;


//��DOM׼������ʱʹ�õ��ӳ�
var readyList;

jQuery.fn.ready = function��fn��{
	//��ӻص�
	jQuery.ready.promise������done��fn��;

	�黹���;
};

jQuery.extend��{
	// DOM�Ƿ����ʹ�ã�һ������������Ϊtrue��
	isReady��false��

	//һ�������������ڸ���֮ǰҪ�ȴ�����Ŀ��
	//�����¼�����������6781
	readyWait��1��

	//���֣����ͷţ������¼�
	holdReady��function��hold��{
		if��hold��{
			jQuery.readyWait ++;
		} else {
			jQuery.ready��true��;
		}
	}��

	// DOM׼������ʱ����
	ready��function��wait��{

		//����д��������ͣ�������Ѿ�׼��������ֹ
		if��wait === true��--jQuery.readyWait��jQuery.isReady��{
			����;
		}

		//��סDOM׼������
		jQuery.isReady = true;

		//���������DOM Ready�¼�������������٣�������Ҫʱ�ȴ�
		if���ȵȣ�== true && --jQuery.readyWait> 0��{
			����;
		}

		//����а󶨵ĺ�������ִ��
		readyList.resolveWith��document��[jQuery]��;

		//�����κΰ󶨵ľ����¼�
		if��jQuery.fn.triggerHandler��{
			jQuery��document��.triggerHandler����ready����;
			jQuery��document��.off����ready����;
		}
	}
}��;

/ **
 *�����¼�����������������
 * /
function completed����{
	document.removeEventListener����DOMContentLoaded����completed��false��;
	window.removeEventListener����load����completed��false��;
	jQuery.ready����;
}

jQuery.ready.promise = function��obj��{
	if����readyList��{

		readyList = jQuery.Deferred����;

		//������������¼����������$��document��.ready�����������
		//�����������Թ�������ʹ��readyState��interactive����������������������
		//��ChrisS�����﷢�֣�http��//bugs.jquery.com/ticket/12282#comment��15
		if��document.readyState ===��complete����{
			//�첽��������ʹ�ű��л����ӳ�׼��
			setTimeout��jQuery.ready��;

		} else {

			//ʹ�÷�����¼��ص�
			document.addEventListener����DOMContentLoaded����completed��false��;

			//���˵�window.onload���⽫ʼ����Ч
			window.addEventListener����load����completed��false��;
		}
	}
	return readyList.promise��obj��;
};

//��ʹ�û�û�У�ҲҪ����DOM�������
jQuery.ready.promise����;




//��ȡ�����ü���ֵ�Ķ๦�ܷ���
//���ֵ�Ǻ����������ѡ��ִ��ֵ/ s
var access = jQuery.access = function��elems��fn��key��value��chainable��emptyGet��raw��{
	var i = 0��
		len = elems.length��
		bulk = key == null;

	//�������ֵ
	if��jQuery.type��key��===��object����{
		chainable = true;
		for��i in key��{
			jQuery.access��elems��fn��i��key [i]��true��emptyGet��raw��;
		}

	//����һ��ֵ
	} else if��value��== undefined��{
		chainable = true;

		if����jQuery.isFunction��value����{
			raw = true;
		}

		if��bulk��{
			//�����������������������
			if��raw��{
				fn.call��elems��value��;
				fn = null;

			// ...ִ�к���ֵʱ����
			} else {
				bulk = fn;
				fn = function��elem��key��value��{
					return bulk.call��jQuery��elem����value��;
				};
			}
		}

		if��fn��{
			for��; i <len; i ++��{
				fn��elems [i]��key��raw��value��value.call��elems [i]��i��fn��elems [i]��key������;
			}
		}
	}

	���ؿ����ӣ�
		Ԫ�أ�

		//��ȡ
		�� ��
			fn.call��elems����
			len��fn��elems [0]��key����emptyGet;
};


/ **
 *ȷ�������Ƿ���԰�������
 * /
jQuery.acceptData = function��owner��{
	//�����ܣ�
	//  - �ڵ�
	//  -  Node.ELEMENT_NODE
	//  -  Node.DOCUMENT_NODE
	//  - ����
	// - �κ�
	/ * jshint -W018 * /
	return owner.nodeType === 1 || owner.nodeType === 9 || ����+ owner.nodeType��;
};


function Data����{
	//֧�֣�Android <4��
	//�ɵ�WebKitû��Object.preventExtensions / freeze������
	//�����µĿն������ʹ��[[set]]������
	Object.defineProperty��this.cache = {}��0��{
		get��function����{
			return {};
		}
	}��;

	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key��function��owner��{
		//���ǿ��Խ����ִ�������з�Ԫ�ؽڵ�����ݣ�
		//�����ǲ�Ӧ�ÿ�����8335��
		//ʼ�շ��ض������ļ���
		if����Data.accepts��owner����{
			����0;
		}

		var descriptor = {}��
			//��������߶����Ƿ����л����
			unlock = owner [this.expando];

		//���û�У��봴��һ��
		if����unlock��{
			unlock = Data.uid ++;

			//���䱣���ڲ���ö�ٵĲ���д������
			����{
				descriptor [this.expando] = {value��unlock};
				Object.defineProperties�������ߣ���������;

			//֧�֣�Android <4
			//���˵���̫��ȫ�Ķ���
			} catch��e��{
				descriptor [this.expando] = unlock;
				jQuery.extend�������ߣ���������;
			}
		}

		//ȷ���������
		if����this.cache [unlock]��{
			this.cache [unlock] = {};
		}

		���ؽ���;
	}��
	set��function��owner��data��value��{
		var prop��
			//���ܻ�Ϊ�˽ڵ���������
			//����ˡ������ߡ�û����Ŀ���봴��һ������
			//�����ý������ͺ�����������Ŀһֱ����һ��
			unlock = this.key�������ߣ���
			cache = this.cache [unlock];

		//�����[�����ߣ���Կ��ֵ] args
		if��typeof data ===��string����{
			cache [data] = value;

		//�����[owner��{properties}] args
		} else {
			//��������е��·�����ǳ�㸴�Ƶ�
			if��jQuery.isEmptyObject��cache����{
				jQuery.extend��this.cache [unlock]��data��;
			//���򣬽�����������Ƶ��������
			} else {
				for�������е�prop��{
					cache [prop] = data [prop];
				}
			}
		}
		���ػ���;
	}��
	get��function��owner��key��{
		//�ҵ��򽫴�����Ч�Ļ��档
		//�������µĻ��沢���ؽ�����
		//����ֱ�ӷ����´�����
		//�����ݶ��� �����ṩ��Ч�������߶���
		var cache = this.cache [this.key��owner��];

		���ؼ�=== undefined��
			cache��cache [key];
	}��
	access��function��owner��key��value��{
		var�洢;
		//�������κ�һ������£�
		//
		// 1.δָ����Կ
		// 2.ָ�����ַ���������δ�ṩ�κ�ֵ
		//
		//���á���ȡ��·��������get����ȷ��
		//Ҫ���ص�ֵ�ֱ�Ϊ��
		//
		// 1.�����������
		// 2.�洢����Կ�е�����
		//
		if��key === undefined ||
				������&& typeof��===���ַ�������&& value === undefined����{

			stored = this.get��owner��key��;

			return stored��== undefined��
				stored��this.get��owner��jQuery.camelCase��key����;
		}

		// [*]���������ַ��������߼���ֵ����
		//ʹ��������һ��ʽָ�������û���չ�����ж��󣩣�
		//
		// 1.���ԵĶ���
		// 2.һ���ؼ��ͼ�ֵ
		//
		this.set�������ߣ���Կ��ֵ��;

		//���ڡ�set��·���������������ܵ���ڵ�
		//���ݲ�ȡ��·������Ԥ������[*]
		����ֵ��== undefined����ֵ���ؼ�;
	}��
	remove��function��owner��key��{
		var i�����֣����գ�
			unlock = this.key�������ߣ���
			cache = this.cache [unlock];

		if��key === undefined��{
			this.cache [unlock] = {};

		} else {
			//֧�������ո�ָ��ļ���
			if��jQuery.isArray��key����{
				//�����name����һ��������......
				//�����������ʱ��ͨ������key������val����ǩ����
				//����ת��ΪcamelCase��
				//����û�а취����_how_�����һ����Կ����ɾ��
				//������ͨ����camelCase������12786
				//��ֻ��ͷ��������·����
				name = key.concat��key.map��jQuery.camelCase����;
			} else {
				camel = jQuery.camelCase��key��;
				//���κβ���֮ǰ���Խ��ַ�����Ϊ��
				if����Կ�ڻ����У�{
					name = [key��camel];
				} else {
					//������ڴ��ո�ļ�����ʹ������
					//����ͨ��ƥ��ǿո�����������
					name = camel;
					name =�����е����ƣ�
						[name] :( name.match��rnotwhite��|| []��;
				}
			}

			i = name.length;
			���� -  �� {
				delete cache [name [i]];
			}
		}
	}��
	hasData��function��owner��{
		return��jQuery.isEmptyObject��
			this.cache [owner [this.expando]] || {}
		��;
	}��
	discard��function��owner��{
		if��owner [this.expando]��{
			ɾ��this.cache [owner [this.expando]];
		}
	}
};
var data_priv = new Data����;

var data_user = new Data����;



//ʵʩժҪ
//
// 1.ʹ��1.9.x��֧ʵ��API��������������
// 2.ͨ�����ٴ洢�����ģ��Ŀ�ά����
//�������Ƶ�·��
// 3.ʹ����ͬ�ĵ�һ������֧�֡�˽�С��͡��û������ݡ�
// 4. _Never_����˽�С����ݱ�¶���û����루TODO��Drop _data��_removeData��
// 5.�������û������Ϲ���ʵ��ϸ�ڣ����磬expando���ԣ�
// 6.Ϊ2014���WeakMapʵʩ�����ṩ��ȷ��;��

var rbrace = / ^������\ {[\ w \ W] * \} | \ [[\ w \ W] * \]��$ /��
	rmultiDash = /��[AZ]��/ g;

function dataAttr��elem��key��data��{
	var name;

	//������ڲ��Ҳ����κ����ݣ��볢�Ի�ȡ�κ�����
	//����HTML5 data- *���Ե�����
	if��data === undefined && elem.nodeType === 1��{
		name =��data-��+ key.replace��rmultiDash���� -  $ 1������toLowerCase����;
		data = elem.getAttribute��name��;

		if��typeof data ===��string����{
			����{
				data = data ===��true�����ǵģ�
					data ===��false�����ٵģ�
					data ===��null������ֵ ��
					//����������ַ��������ת��Ϊ����
					+ data +����===���ݣ�+���ݣ�
					rbrace.test�����ݣ���jQuery.parseJSON�����ݣ���
					����;
			} catch��e��{}

			//ȷ�������������ݣ��Ա��Ժ󲻻����
			data_user.set��elem��key��data��;
		} else {
			data = undefined;
		}
	}
	��������;
}

jQuery.extend��{
	hasData��function��elem��{
		return data_user.hasData��elem��|| data_priv.hasData��elem��;
	}��

	data��function��elem��name��data��{
		return data_user.access��elem��name��data��;
	}��

	removeData��function��elem��name��{
		data_user.remove��elem��name��;
	}��

	// TODO�������Ѿ��滻�˶�_data��_removeData�����е���
	//ֱ�ӵ���data_priv���������Բ��Ƽ�ʹ����Щ������
	_data��function��elem��name��data��{
		return data_priv.access��elem��name��data��;
	}��

	_removeData��function��elem��name��{
		data_priv.remove��elem��name��;
	}
}��;

1.3�У�{
	data��function��key��value��{
		var i�����ƣ����ݣ�
			elem = this [0]��
			attrs = elem && elem.attributes;

		//��ȡ����ֵ
		if��key === undefined��{
			if��this.length��{
				data = data_user.get��elem��;

				if��elem.nodeType === 1 &&��data_priv.get��elem����hasDataAttrs������{
					i = attrs.length;
					���� -  �� {

						//֧�֣�IE11 +
						// attrsԪ�ؿ���Ϊnull����14894��
						if��attrs [i]��{
							name = attrs [i] .name;
							if��name.indexOf����data-����=== 0��{
								name = jQuery.camelCase��name.slice��5����;
								dataAttr��elem��name��data [name]��;
							}
						}
					}
					data_priv.set��elem����hasDataAttrs����true��;
				}
			}

			��������;
		}

		//���ö��ֵ
		if��typeof key ===��object����{
			return this.each��function����{
				data_user.set��this��key��;
			}��;
		}

		���ط��ʣ�this��function��value��{
			var���ݣ�
				camelKey = jQuery.camelCase��key��;

			//����jQuery����Ԫ��ƥ�䣩��Ϊ��
			//�������[0]������һ��Ԫ�أ���
			//`value`����δ���塣һ���յ�jQuery����
			//������elem = this [0]��`undefined`
			//������Զ�ȡ���ݻ��棬���׳��쳣��
			if��elem && value === undefined��{
				//���Դӻ����л�ȡ����
				//����ԭ��
				data = data_user.get��elem��key��;
				if��data��== undefined��{
					��������;
				}

				//���Դӻ����л�ȡ����
				//��Կ������
				data = data_user.get��elem��camelKey��;
				if��data��== undefined��{
					��������;
				}

				//���ԡ����֡��е�����
				// HTML5�Զ������� -  * attrs
				data = dataAttr��elem��camelKey��undefined��;
				if��data��== undefined��{
					��������;
				}

				//����Ŭ�����ԣ������ݲ����ڡ�
				����;
			}

			//��������......
			this.each��function����{
				//���ȣ����Դ洢�κθ���������
				//�����Ѿ�ʹ��camelCased��Կ�洢�����ݡ�
				var data = data_user.get��this��camelKey��;

				//����HTML5 data- *���Ի����������Ǳ���
				//ʹ�����ۺ���camelCase��ʽ�洢�������ơ�
				//����ܲ���������������...... *
				data_user.set��this��camelKey��value��;

				// * ...���ڿ���_actually_������
				//�����ۺţ����ǻ���Ҫ�洢���ĸ���
				//����ĲƲ���
				if��key.indexOf���� - ������== -1 && data��== undefined��{
					data_user.set��this��key��value��;
				}
			}��;
		}��null��value��arguments.length> 1��null��true��;
	}��

	removeData��function��key��{
		return this.each��function����{
			data_user.remove��this��key��;
		}��;
	}
}��;


jQuery.extend��{
	queue��function��elem��type��data��{
		var queue;

		if��elem��{
			type =��type ||��fx����+��queue��;
			queue = data_priv.get��elem��type��;

			//�����ֻ��һ�β��ң�����ͨ�������˳������ٳ���
			if��data��{
				if����queue || jQuery.isArray��data����{
					queue = data_priv.access��elem��type��jQuery.makeArray��data����;
				} else {
					queue.push��data��;
				}
			}
			���ض���|| [];
		}
	}��

	dequeue��function��elem��type��{
		type = type || ��FX��;

		var queue = jQuery.queue��elem��type����
			startLength = queue.length��
			fn = queue.shift������
			hooks = jQuery._queueHooks��elem��type����
			next = function����{
				jQuery.dequeue��elem��type��;
			};

		//���fx���г��У���ʼ��ɾ������sentinel
		if��fn ===��inprogress����{
			fn = queue.shift����;
			startLength--;
		}

		if��fn��{

			//��ӽ���sentinel�Է�ֹfx���н���
			//�Զ�����
			if��type ===��fx����{
				queue.unshift����inprogress����;
			}

			//������һ������ֹͣ����
			delete hooks.stop;
			fn.call��elem��next��hooks��;
		}

		if����startLength && hooks��{
			hooks.empty.fire����;
		}
	}��

	//������ - ����queueHooks���󣬻򷵻ص�ǰ����
	_queueHooks��function��elem��type��{
		var key = type +��queueHooks��;
		return data_priv.get��elem��key��|| data_priv.access��elem��key��{
			empty��jQuery.Callbacks����once memory������add��function����{
				data_priv.remove��elem��[type +��queue����key]��;
			}��
		}��;
	}
}��;

1.3�У�{
	queue��function��type��data��{
		var setter = 2;

		if��typeof type��==��string����{
			data = type;
			type =��fx��;
			setter--;
		}

		if��arguments.length <setter��{
			return jQuery.queue��this [0]��type��;
		}

		��������=== undefined��
			��� ��
			this.each��function����{
				var queue = jQuery.queue��this��type��data��;

				//ȷ���˶��еĹҹ�
				jQuery._queueHooks��this��type��;

				if��type ===��fx��&& queue [0]��==��inprogress����{
					jQuery.dequeue��this��type��;
				}
			}��;
	}��
	dequeue��function��type��{
		return this.each��function����{
			jQuery.dequeue��this��type��;
		}��;
	}��
	clearQueue��function��type��{
		return this.queue��type ||��fx����[]��;
	}��
	//��ȡĳ�����͵Ķ���ʱ�����ĳ�ŵ
	//����գ�Ĭ�������fx�����ͣ�
	promise��function��type��obj��{
		var tmp��
			count = 1��
			defer = jQuery.Deferred������
			Ҫ��=�����
			i = this.length��
			resolve = function����{
				if������ -  count����{
					defer.resolveWith��elements��[elements]��;
				}
			};

		if��typeof type��==��string����{
			obj = type;
			type = undefined;
		}
		type = type || ��FX��;

		���� -  �� {
			tmp = data_priv.get��elements [i]��type +��queueHooks����;
			if��tmp && tmp.empty��{
				����++;
				tmp.empty.add��resolve��;
			}
		}
		�������;
		return defer.promise��obj��;
	}
}��;
var pnum =��/ [+  - ]��������[d *��*] \ d +������[eE] [+  - ]��\ d+ || /����

var cssExpand = [��Top������Right������Bottom������Left��];

var isHidden = function��elem��el��{
		// isHidden�����Ǵ�jQuery��filter�������õ�;
		//����������£�element���ǵڶ�������
		elem = el || ELEM;
		return jQuery.css��elem����display����===��none��|| ��jQuery.contains��elem.ownerDocument��elem��;
	};

var rcheckableType =��/ ^������checkbox | radio��$ / i��;



��function����{
	var fragment = document.createDocumentFragment������
		div = fragment.appendChild��document.createElement����div��������
		input = document.createElement����input����;

	//֧�֣�Safari <= 5.1
	//������������ƣ����״̬�Ƿ�ʧ����11217��
	//֧�֣�Windows Web Apps��WWA��
	//`name`��`type`����ʹ��.setAttribute for WWA����14901��
	input.setAttribute����type������radio����;
	input.setAttribute����checked������checked����;
	input.setAttribute����name������t����;

	div.appendChild�����룩;

	//֧�֣�Safari <= 5.1��Android <4.2
	//�Ͼɵ�WebKit������Ƭ������ȷ��¡�Ѽ��״̬
	support.checkClone = div.cloneNode��true��.cloneNode��true��.lastChild.checked;

	//֧�֣�IE <= 11 +
	//ȷ����ȷ��¡textarea���͸�ѡ��defaultValue
	div.innerHTML =��<textarea> x </ textarea>��;
	support.noCloneChecked = !! div.cloneNode��true��.lastChild.defaultValue;
}������;
var strundefined = typeof undefined;



support.focusinBubbles =��onfocusin���ڴ�����;


VAR
	rkeyEvent = / ^ key /��
	rmouseEvent = / ^������mouse | pointer | contextmenu��| click /��
	rfocusMorph = / ^������focusinfocus | focusoutblur��$ /��
	rtypenamespace = /^([^.]*)(?:?.(.+)|)$/;

function returnTrue����{
	����true;
}

function returnFalse����{
	�������;
}

function safeActiveElement����{
	����{
		return document.activeElement;
	} catch��err��{}
}

/ *
 * Helper�������ڹ����¼� - ���ǹ����ӿڵ�һ���֡�
 *ΪDean Edwards��addEvent���ṩ������뷨�ĵ��ߡ�
 * /
jQuery.event = {

	ȫ��{}��

	add��function��elem��types��handler��data��selector��{

		var handleObjIn��eventHandle��tmp��
			events��t��handleObj��
			���⣬����������ͣ������ռ䣬origType��
			elemData = data_priv.get��elem��;

		//��Ҫ���¼����ӵ�noData��text / comment�ڵ㣨��������ͨ����
		if����elemData��{
			����;
		}

		//�����߿��Դ����Զ������ݵĶ��������洦�����
		if��handler.handler��{
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		//ȷ������������ΨһID���Ժ����ڲ���/ɾ����
		if����handler.guid��{
			handler.guid = jQuery.guid ++;
		}

		//��ʼ��Ԫ�ص��¼��ṹ�����������������ǵ�һ��
		if������events = elemData.events����{
			events = elemData.events = {};
		}
		if������eventHandle = elemData.handle����{
			eventHandle = elemData.handle = function��e��{
				//����jQuery.event.trigger�����͵ĵڶ����¼�
				//��ҳ��ж�غ�����¼�ʱ
				��������jQuery��== strundefined && jQuery.event.triggered��== e.type��
					jQuery.event.dispatch.apply��elem��arguments����undefined;
			};
		}

		//�����ɿո�ָ��Ķ���¼�
		types =��types ||��������match��rnotwhite��|| [����];
		t = types.length;
		while��t--��{
			tmp = rtypenamespace.exec��types [t]��|| [];
			type = origType = tmp [1];
			namespaces =��tmp [2] ||��������split������������sort����;

			//����*����*��һ�����ͣ�û�и������ƿռ�Ĵ������
			if����type��{
				����;
			}

			//����¼����������ͣ���ʹ�������¼������������������
			special = jQuery.event.special [type] || {};

			//���������ѡ��������ȷ�������¼�api���ͣ������������
			type =��selector��special.delegateType��special.bindType��|| ����;

			//�������������͸�������
			special = jQuery.event.special [type] || {};

			// handleObj�����ݸ������¼��������
			handleObj = jQuery.extend��{
				���ͣ����ͣ�
				origType��origType��
				���ݣ����ݣ�
				handler��handler��
				guid��handler.guid��
				ѡ������ѡ������
				needsContext��selector && jQuery.expr.match.needsContext.test��selector����
				namespace��namespaces.join����������
			}��handleObjIn��;

			//��������ǵ�һ�����������¼�����������
			if������handlers = events [type]����{
				handlers = events [type] = [];
				handlers.delegateCount = 0;

				//��������¼�������򷵻�false�����ʹ��addEventListener
				if����special.setup || special.setup.call��elem��data��namespaces��eventHandle��=== false��{
					if��elem.addEventListener��{
						elem.addEventListener��type��eventHandle��false��;
					}
				}
			}

			if��special.add��{
				special.add.call��elem��handleObj��;

				if����handleObj.handler.guid��{
					handleObj.handler.guid = handler.guid;
				}
			}

			//��ӵ�Ԫ�صĴ�������б���ǰ��ί��
			if��selector��{
				handlers.splice��handlers.delegateCount ++��0��handleObj��;
			} else {
				handlers.push��handleObj��;
			}

			//��������ʹ�ù���Щ�¼����Խ����¼��Ż�
			jQuery.event.global [type] = true;
		}

	}��

	//��Ԫ���з����¼����¼���
	remove��function��elem��types��handler��selector��mappedTypes��{

		var j��origCount��tmp��
			events��t��handleObj��
			���⣬����������ͣ������ռ䣬origType��
			elemData = data_priv.hasData��elem��&& data_priv.get��elem��;

		if����elemData ||����events = elemData.events����{
			����;
		}

		//���������е�ÿ��type.namespaceһ��; ���Ϳ���ʡ��
		types =��types ||��������match��rnotwhite��|| [����];
		t = types.length;
		while��t--��{
			tmp = rtypenamespace.exec��types [t]��|| [];
			type = origType = tmp [1];
			namespaces =��tmp [2] ||��������split������������sort����;

			//ȡ����Ԫ�ص������¼����ڴ������ռ��ϣ�����ṩ��
			if����type��{
				for�������¼���{
					jQuery.event.remove��elem��type + types [t]��handler��selector��true��;
				}
				����;
			}

			special = jQuery.event.special [type] || {};
			type =��selector��special.delegateType��special.bindType��|| ����;
			�������=�¼�[����] || [];
			tmp = tmp [2] && new RegExp������^ | \\������+ namespaces.join����\\����������* \\��|������+����\\��| $���� ��;

			//ɾ��ƥ����¼�
			origCount = j = handlers.length;
			while��j--��{
				handleObj = handlers [j];

				if����mappedTypes || origType === handleObj.origType��&&
					����handler || handler.guid === handleObj.guid��&&
					����tmp || tmp.test��handleObj.namespace����&&
					����selector || selector === handleObj.selector || selector ===��**��&& handleObj.selector����{
					handlers.splice��j��1��;

					if��handleObj.selector��{
						handlers.delegateCount--;
					}
					if��special.remove��{
						special.remove.call��elem��handleObj��;
					}
				}
			}

			//ɾ��ͨ���¼���������������ɾ����ĳЩ���ݲ��Ҳ��ٴ��ڴ����
			//��������ɾ�������¼��������ʱ���޵ݹ飩
			if��origCount &&��handlers.length��{
				if����special.teardown || special.teardown.call��elem��namespaces��elemData.handle��=== false��{
					jQuery.removeEvent��elem��type��elemData.handle��;
				}

				ɾ���¼�[����];
			}
		}

		//�������ʹ��expando���뽫��ɾ��
		if��jQuery.isEmptyObject��events����{
			ɾ��elemData.handle;
			data_priv.remove��elem����events����;
		}
	}��

	trigger��function��event��data��elem��onlyHandlers��{

		var i��cur��tmp��bubbleType��ontype��handle��special��
			eventPath = [elem || �ļ�]��
			type = hasOwn.call��event����type������event.type��event��
			namespaces = hasOwn.call��event����namespace������event.namespace.split������������[];

		cur = tmp = elem = elem || ����;

		//��Ҫ���ı���ע�ͽڵ���ִ���¼�
		if��elem.nodeType === 3 || elem.nodeType === 8��{
			����;
		}

		//�۽�/ģ�����ξ۽�/�۽�; ȷ���������ڲ��������
		if��rfocusMorph.test��type + jQuery.event.triggered����{
			����;
		}

		if��type.indexOf����������> = 0��{
			//�����ռ䴥����; ����һ��regexp��ƥ��handle�����е��¼�����
			namespaces = type.split����������;
			type = namespaces.shift����;
			namespaces.sort����;
		}
		ontype = type.indexOf����������<0 &&��on��+ type;

		//�����߿��Դ���jQuery.Event����Object��ֻ�����¼������ַ���
		event = event [jQuery.expando]��
			�¼���
			new jQuery.Event��type��typeof event ===��object��&& event��;

		//����λ���룺��1��ʾ�����������; ��2 for jQuery��������ˣ�
		event.isTrigger = onlyHandlers��2��3;
		event.namespace = namespaces.join����������;
		event.namespace_re = event.namespace��
			new RegExp������^ | \\������+ namespaces.join����\\����������* \\��|������+����\\��| $��������
			��ֵ;

		//�����¼��Է��ظ�ʹ��
		event.result = undefined;
		if����event.target��{
			event.target = elem;
		}

		//��¡�κδ�������ݲ����¼�ǰ��ӣ������������arg�б�
		data = data == null��
			[�¼�]��
			jQuery.makeArray��data��[event]��;

		//���������¼����������
		special = jQuery.event.special [type] || {};
		if����onlyHandlers && special.trigger && special.trigger.apply��elem��data��=== false��{
			����;
		}

		//����W3C�¼��淶����9951��Ԥ��ȷ���¼�����·��
		//ð�ݵ��ĵ���Ȼ�󵽴���; ע��ȫ���������ĵ�var����9724��
		if����onlyHandlers &&��special.noBubble &&��jQuery.isWindow��elem����{

			bubbleType = special.delegateType || ����;
			if����rfocusMorph.test��bubbleType + type����{
				cur = cur.parentNode;
			}
			for��; cur; cur = cur.parentNode��{
				eventPath.push��cur��;
				tmp = cur;
			}

			//���������Ҫ�ĵ������磬������ͨ��obj������DOM����ֻ��Ӵ���
			if��tmp ===��elem.ownerDocument || document����{
				eventPath.push��tmp.defaultView || tmp.parentWindow || window��;
			}
		}

		//�¼�·���ϵ������������
		i = 0;
		while����cur = eventPath [i ++]��&&��event.isPropagationStopped������{

			event.type = i> 1��
				bubbleType��
				special.bindType || ����;

			// jQuery�������
			handle =��data_priv.get��cur����events����|| {}��[event.type] && data_priv.get��cur����handle����;
			if��handle��{
				handle.apply��cur��data��;
			}

			//ԭ���������
			handle = ontype && cur [ontype];
			if��handle && handle.apply && jQuery.acceptData��cur����{
				event.result = handle.apply��cur��data��;
				if��event.result === false��{
					event.preventDefault����;
				}
			}
		}
		event.type = type;

		//���û������ֹĬ�ϲ�����������ִ��
		if����onlyHandlers &&��event.isDefaultPrevented������{

			if������special._default || special._default.apply��eventPath.pop������data��=== false��&&
				jQuery.acceptData��elem����{

				//ʹ�����¼���ͬ��������Ŀ���ϵ��ñ���DOM������
				//��Ҫ�Դ���ִ��Ĭ�ϲ���������ȫ�ֱ�����λ�ã���6170��
				if��ontype && jQuery.isFunction��elem [type]��&&��jQuery.isWindow��elem����{

					//�����ǵ�������FOO��������ʱ����Ҫ���´���onFOO�¼�
					tmp = elem [ontype];

					if��tmp��{
						elem [ontype] = null;
					}

					//��ֹ���´���ͬһ�¼�����Ϊ�����Ѿ�������ð����
					jQuery.event.triggered = type;
					elem [type]����;
					jQuery.event.triggered = undefined;

					if��tmp��{
						elem [ontype] = tmp;
					}
				}
			}
		}

		return event.result;
	}��

	dispatch��function��event��{

		//�ӱ����¼����󴴽���д��jQuery.Event
		event = jQuery.event.fix��event��;

		var i��j��ret��matched��handleObj��
			handlerQueue = []��
			args = slice.call��arguments����
			�������=��data_priv.get��this����events����|| {}��[event.type] || []��
			special = jQuery.event.special [event.type] || {};

		//ʹ��fix-ed jQuery.Event�����ǣ�ֻ���������¼�
		args [0] =�¼�;
		event.delegateTarget = this;

		//Ϊӳ�����͵���preDispatch�ҹ��������Ҫ����������
		if��special.preDispatch && special.preDispatch.call��this��event��=== false��{
			����;
		}

		//ȷ���������
		handlerQueue = jQuery.event.handlers.call��this��event��handlers��;

		//�����д���; ���ǿ�����ֹͣ���������´���
		i = 0;
		while����matched = handlerQueue [i ++]��&&��event.isPropagationStopped������{
			event.currentTarget = matched.elem;

			j = 0;
			while����handleObj = matched.handlers [j ++]��&&��event.isImmediatePropagationStopped������{

				//�����¼�����1��û�������ռ䣬��2���������ռ�
				//һ���Ӽ�����ڰ��¼��е��Ӽ������߶�û�������ռ䣩��
				if����event.namespace_re || event.namespace_re.test��handleObj.namespace����{

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret =����jQuery.event.special [handleObj.origType] || {}����handle || handleObj.handler��
							.apply��matched.elem��args��;

					if��ret��== undefined��{
						if����event.result = ret��=== false��{
							event.preventDefault����;
							event.stopPropagation����;
						}
					}
				}
			}
		}

		//Ϊӳ�����͵���postDispatch�ҹ�
		if��special.postDispatch��{
			special.postDispatch.call��this��event��;
		}

		return event.result;
	}��

	�������function��event��handlers��{
		var i��matches��sel��handleObj��
			handlerQueue = []��
			delegateCount = handlers.delegateCount��
			cur = event.target;

		//����ί�д������
		//�ڶ�SVG <use>ʵ��������13180��
		//������Firefox�н��з��������ð�ݣ���3861��
		if��delegateCount && cur.nodeType &&����event.button || event.type��==��click������{

			for��; cur��== this; cur = cur.parentNode || this��{

				//��Ҫ�����ѽ���Ԫ�صĵ����������6911����8165����11382����11764��
				if��cur.disabled��== true || event.type��==��click����{
					matches = [];
					for��i = 0; i <delegateCount; i ++��{
						handleObj = handlers [i];

						//��Ҫ��Object.prototype���Գ�ͻ����13203��
						sel = handleObj.selector +����;

						if��ƥ��[sel] === undefined��{
							ƥ��[sel] = handleObj.needsContext��
								jQuery��sel��this��.index��cur��> = 0��
								jQuery.find��sel��this��null��[cur]����length;
						}
						if��ƥ��[sel]��{
							matches.push��handleObj��;
						}
					}
					if��matches.length��{
						handlerQueue.push��{elem��cur��handlers��matches}��;
					}
				}
			}
		}

		//���ʣ��ģ�ֱ�Ӱ󶨵ģ��������
		if��delegateCount <handlers.length��{
			handlerQueue.push��{elem��this��handlers��handlers.slice��delegateCount��}��;
		}

		return handlerQueue;
	}��

	//����KeyEvent��MouseEvent�����һЩ�¼�����
	���ߣ���altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view��.split����������

	fixHooks��{}��

	keyHooks��{
		���ߣ���char charCode key keyCode��.split����������
		filter��function��event��original��{

			//��ӹؼ��¼�
			if��event.which == null��{
				event.which = original.charCode��= null��original.charCode��original.keyCode;
			}

			�ع��¼�;
		}
	}��

	mouseHooks��{
		���ߣ�����ť��ťclientX clientY offsetX offsetY pageX pageY screenX screenY toElement��.split����������
		filter��function��event��original��{
			var eventDoc��doc��body��
				button = original.button;

			//���ȱ�ٲ���clientX / Y���ã������pageX / Y.
			if��event.pageX == null && original.clientX��= null��{
				eventDoc = event.target.ownerDocument || ����;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +��doc && doc.scrollLeft || body && body.scrollLeft || 0�� - ��doc && doc.clientLeft || body && body.clientLeft || 0��;
				event.pageY = original.clientY +��doc && doc.scrollTop || body && body.scrollTop || 0�� - ��doc && doc.clientTop || body && body.clientTop || 0��;
			}

			//��ӵ����1 === left; 2 ===��; 3 ===��
			//ע�⣺��ťδ�淶�����������ʹ����
			if����event.which && button��== undefined��{
				event.which =����ť��1��1 :(��ť��2��3 :(��ť��4��2��0������;
			}

			�ع��¼�;
		}
	}��

	�޸���function��event��{
		if��event [jQuery.expando]��{
			�ع��¼�;
		}

		//�����¼�����Ŀ�д�������淶��ĳЩ����
		var i��prop��copy��
			type = event.type��
			originalEvent = event��
			fixHook = this.fixHooks [type];

		if����fixHook��{
			this.fixHooks [type] = fixHook =
				rmouseEvent.test�����ͣ���this.mouseHooks��
				rkeyEvent.test�����ͣ���this.keyHooks��
				{};
		}
		copy = fixHook.props��this.props.concat��fixHook.props����this.props;

		event = new jQuery.Event��originalEvent��;

		i = copy.length;
		���� -  �� {
			prop = copy [i];
			event [prop] = originalEvent [prop];
		}

		//֧�֣�Cordova 2.5��WebKit������13255��
		//�����¼���Ӧ����Ŀ��; �ƶ������豸û��
		if����event.target��{
			event.target = document;
		}

		//֧�֣�Safari 6.0 +��Chrome <28
		//Ŀ�겻Ӧ�����ı��ڵ㣨��504����13143��
		if��event.target.nodeType === 3��{
			event.target = event.target.parentNode;
		}

		return fixHook.filter��fixHook.filter��event��originalEvent����event;
	}��

	�ر�{
		load��{
			//��ֹ������image.load�¼���ð�ݵ�window.load
			noBubble���ǵ�
		}��
		���㣺{
			//������ܣ��봥�������¼�����ʹģ��/����������ȷ
			trigger��function����{
				if��this��== safeActiveElement����&& this.focus��{
					this.focus����;
					�������;
				}
			}��
			delegateType����focusin��
		}��
		ģ����{
			trigger��function����{
				if��this === saf eActiveElement����&& this.blur��{
					this.blur����;
					�������;
				}
			}��
			delegateType����focusout��
		}��
		�����{
			//���ڸ�ѡ�򣬴��������¼����Ա���״̬����ȷ��
			trigger��function����{
				if��this.type ===��checkbox��&& this.click && jQuery.nodeName��this����input������{
					this.click����;
					�������;
				}
			}��

			//���ڿ��������һ���ԣ������������ϴ�������.click����
			_default��function��event��{
				return jQuery.nodeName��event.target����a����;
			}
		}��

		beforeunload��{
			postDispatch��function��event��{

				//֧�֣�Firefox 20+
				//���δ����returnValue�ֶΣ�Firefox���ᷢ��������
				if��event.result��== undefined && event.originalEvent��{
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}��

	ģ�⣺���������ͣ�Ԫ�أ��¼�����ĭ��{
		//�ھ������¼��ϱ���ʽ��ģ�ⲻͬ���¼���
		//��ðԭ������Ա�������ߵ�ֹͣ�����������
		//ģ���¼���ֹĬ�ϣ�Ȼ�������ھ���������ͬ�������顣
		var e = jQuery.extend��
			�µ�jQuery.Event������
			�¼���
			{
				���ͣ����ͣ�
				isSimulated���ǵģ�
				originalEvent��{}
			}
		��;
		if��bubble��{
			jQuery.event.trigger��e��null��elem��;
		} else {
			jQuery.event.dispatch.call��elem��e��;
		}
		if��e.isDefaultPrevented������{
			event.preventDefault����;
		}
	}
};

jQuery.removeEvent = function��elem��type��handle��{
	if��elem.removeEventListener��{
		elem.removeEventListener��type��handle��false��;
	}
};

jQuery.Event = function��src��props��{
	//����û��'new'�ؼ��ֵ�ʵ����
	if��������ʵ��ΪjQuery.Event����{
		�����µ�jQuery.Event��src��props��;
	}

	//�¼�����
	if��src && src.type��{
		this.originalEvent = src;
		this.type = src.type;

		//ð���ĵ����¼������ѱ��Ϊ����ֹ
		//��������Ĵ���������; ��ӳ��ȷ�ļ�ֵ��
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				//֧�֣�Android <4.0
				src.returnValue === false��
			returnTrue��
			returnFalse;

	// �¼�����
	} else {
		this.type = src;
	}

	//����ʽ�ṩ�����Է����¼�������
	if�����ߣ�{
		jQuery.extend��this��props��;
	}

	//���������¼�û��ʱ������봴��һ��ʱ���
	this.timeStamp = src && src.timeStamp || jQuery.now����;

	//������Ϊ���޸�
	��[jQuery.expando] = true;
};

// jQuery.Event����ECMAScript���԰�ָ����DOM3�¼�
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented��returnFalse��
	isPropagationStopped��returnFalse��
	isImmediatePropagationStopped��returnFalse��

	preventDefault��function����{
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if��e && e.preventDefault��{
			e.preventDefault����;
		}
	}��
	stopPropagation��function����{
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if��e && e.stopPropagation��{
			e.stopPropagation����;
		}
	}��
	stopImmediatePropagation��function����{
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if��e && e.stopImmediatePropagation��{
			e.stopImmediatePropagation����;
		}

		this.stopPropagation����;
	}
};

//ʹ�������ͣ/�˳����¼�ʱ���鴴���������/�뿪�¼�
//֧�֣�Chrome 15+
jQuery.each��{
	mouseenter����mouseover����
	mouseleave����mouseout����
	pointerenter����ָ�롱��
	pointerleave����ָ�롱
}��function��orig��fix��{
	jQuery.event.special [orig] = {
		delegateType���޸���
		bindType��fix��

		handle��function��event��{
			var ret��
				target = this��
				related = event.relatedTarget��
				handleObj = event.handleObj;

			//����mousenter / leave���ô�����������أ���Ŀ��֮�⡣
			//ע�⣺�������뿪/������������ڣ��������Ŀ��
			if����related ||��related��== target &&��jQuery.contains��target��related������{
				event.type = handleObj.origType;
				ret = handleObj.handler.apply��this��arguments��;
				event.type = fix;
			}
			����;
		}
	};
}��;

//֧�֣�Firefox��Chrome��Safari
//������ð�ݡ����㲢ģ���¼�
if����support.focusinBubbles��{
	jQuery.each��{focus����focusin����blur����focusout��}��function��orig��fix��{

		//��������Ҫ�۽�/�۽�ʱ�����ĵ��ϸ���һ�����������
		var handler = function��event��{
				jQuery.event.simulate��fix��event.target��jQuery.event.fix��event����true��;
			};

		jQuery.event.special [fix] = {
			setup��function����{
				var doc = this.ownerDocument || �����
					attaches = data_priv.access��doc��fix��;

				if����attaches��{
					doc.addEventListener��orig��handler��true��;
				}
				data_priv.access��doc��fix����attaches || 0��+ 1��;
			}��
			��⣺function����{
				var doc = this.ownerDocument || �����
					attaches = data_priv.access��doc��fix�� -  1;

				if����attaches��{
					doc.removeEventListener��orig��handler��true��;
					data_priv.remove��doc��fix��;

				} else {
					data_priv.access��doc��fix��attaches��;
				}
			}
		};
	}��;
}

1.3�У�{

	on��function��types��selector��data��fn��/ * INTERNAL * / one��{
		var origFn��type;

		//���Ϳ���������/��������ӳ��
		if��typeof types ===��object����{
			//������ - ����ѡ���������ݣ�
			if��typeof selector��==��string����{
				//������ - �������ݣ�
				data = data || ѡ��;
				selector = undefined;
			}
			for��type in types��{
				this.on�����ͣ�ѡ���������ݣ�����[����]��һ����;
			}
			�黹���;
		}

		if��data == null && fn == null��{
			//�����ͣ�fn��
			fn =ѡ����;
			data = selector = undefined;
		} else if��fn == null��{
			if��typeof selector ===��string����{
				//�����ͣ�ѡ������fn��
				fn =����;
				data = undefined;
			} else {
				//�����ͣ����ݣ�fn��
				fn =����;
				data = selector;
				selector = undefined;
			}
		}
		if��fn === false��{
			fn = returnFalse;
		} else if����fn��{
			�黹���;
		}

		if��one === 1��{
			origFn = fn;
			fn = function��event��{
				//����ʹ�ÿռ�����Ϊ�¼�������Ϣ
				jQuery������off��event��;
				return origFn.apply��this��arguments��;
			};
			//ʹ����ͬ��guid���Ա�����߿���ʹ��origFnɾ��
			fn.guid = origFn.guid || ��origFn.guid = jQuery.guid ++��;
		}
		return this.each��function����{
			jQuery.event.add��this��types��fn��data��selector��;
		}��;
	}��
	һ�����������ͣ�ѡ���������ݣ�fn��{
		return this.on��types��selector��data��fn��1��;
	}��
	off��function��types��selector��fn��{
		var handleObj��type;
		if��types && types.preventDefault && types.handleObj��{
			//��event������jQuery.Event
			handleObj = types.handleObj;
			jQuery��types.delegateTarget��.off��
				handleObj.namespace��handleObj.origType +������ + handleObj.namespace��handleObj.origType��
				handleObj.selector��
				handleObj.handler
			��;
			�黹���;
		}
		if��typeof types ===��object����{
			//��types-object [��selector]��
			for��type in types��{
				this.off��type��selector��types [type]��;
			}
			�黹���;
		}
		if��selector === false || typeof selector ===��function����{
			//������[��fn]��
			fn =ѡ����;
			selector = undefined;
		}
		if��fn === false��{
			fn = returnFalse;
		}
		return this.each��function����{
			jQuery.event.remove��this��types��fn��selector��;
		}��;
	}��

	trigger��function��type��data��{
		return this.each��function����{
			jQuery.event.trigger��type��data��this��;
		}��;
	}��
	triggerHandler��function��type��data��{
		var elem = this [0];
		if��elem��{
			return jQuery.event.trigger��type��data��elem��true��;
		}
	}
}��;


VAR
	rxhtmlTag = / <������area | br | col | embed | hr | img | input | link | meta | param������[\ w��] +��[^>] *��\ /> / gi��
	rtagName = / <��[\ w��] +��/��
	rhtml = / <|������\ w +; /��
	rnoInnerhtml = / <������script | style | link��/ i��
	// checked =��ѡ�С���ѡ��
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = / ^ $ | \ /������java | ecma��script / i��
	rscriptTypeMasked = /^true \ /(.*)/,
	rcleanScript = / ^ \ s * <��������\ [CDATA \ [|  - ��|������\] \] |  - ��> \ s * $ / g��

	//���Ǳ���ر���Щ��ǩ����֧��XHTML����13200��
	wrapMap = {

		//֧�֣�IE9
		ѡ�[1����<select multiple ='multiple'>������</ select>��]��

		thead��[1����<table>������</ table>��]��
		col��[2����<table> <colgroup>������</ colgroup> </ table>��]��
		tr��[2����<table> <tbody>������</ tbody> </ table>��]��
		td��[3����<table> <tbody> <tr>������</ tr> </ tbody> </ table>��]��

		_default��[0������������]
	};

//֧�֣�IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

//֧�֣�1.x������
//��������Ҫһ��tbody
function manipulationTarget��elem��content��{
	return jQuery.nodeName��elem����table����&&
		jQuery.nodeName��content.nodeType��== 11��content��content.firstChild����tr������

		elem.getElementsByTagName����tbody����[0] ||
			elem.appendChild��elem.ownerDocument.createElement����tbody��������
		ELEM;
}

//�滻/�ָ��ű�Ԫ�ص�type�����Խ��а�ȫ��DOM����
function disableScript��elem��{
	elem.type =��elem.getAttribute����type������== null��+��/��+ elem.type;
	����Ԫ��;
}
function restoreScript��elem��{
	var match = rscriptTypeMasked.exec��elem.type��;

	if��match��{
		elem.type = match [1];
	} else {
		elem.removeAttribute�� �����롱��;
	}

	����Ԫ��;
}

//���ű����Ϊ�Ѿ�������
function setGlobalEval��elems��refElements��{
	var i = 0��
		l = elems.length;

	for��; i <l; i ++��{
		data_priv.set��
			elems [i]����globalEval������refElements || data_priv.get��refElements [i]����globalEval����
		��;
	}
}

function cloneCopyEvent��src��dest��{
	var i��l��type��pdataOld��pdataCur��udataOld��udataCur��events;

	if��dest.nodeType��== 1��{
		����;
	}

	// 1.����˽�����ݣ��¼�����������
	if��data_priv.hasData��src����{
		pdataOld = data_priv.access��src��;
		pdataCur = data_priv.set��dest��pdataOld��;
		events = pdataOld.events;

		if��events��{
			ɾ��pdataCur.handle;
			pdataCur.events = {};

			for�������¼���{
				for��i = 0��l = events [type] .length; i <l; i ++��{
					jQuery.event.add��dest��type��events [type] [i]��;
				}
			}
		}
	}

	// 2.�����û�����
	if��data_user.hasData��src����{
		udataOld = data_user.access��src��;
		udataCur = jQuery.extend��{}��udataOld��;

		data_user.set��dest��udataCur��;
	}
}

function getAll��context��tag��{
	var ret = context.getElementsByTagName��context.getElementsByTagName��tag ||��*������
			context.querySelectorAll��context.querySelectorAll��tag ||��*������
			[];

	return tag === undefined || tag && jQuery.nodeName��context��tag����
		jQuery.merge��[context]��ret����
		RET;
}

//�޸�IE���������֧�ֲ���
function fixInput��src��dest��{
	var nodeName = dest.nodeName.toLowerCase����;

	//�޷����ֿ�¡��ѡ���ѡ��ť���Ѽ��״̬��
	if��nodeName ===��input��&& rcheckableType.test��src.type����{
		dest.checked = src.checked;

	//��¡ѡ��ʱ���޷�����ѡѡ��ص�Ĭ��ѡ��״̬
	} else if��nodeName ===��input��|| nodeName ===��textarea����{
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend��{
	clone��function��elem��dataAndEvents��deepDataAndEvents��{
		var i��l��srcElements��destElements��
			clone = elem.cloneNode��true����
			inPage = jQuery.contains��elem.ownerDocument��elem��;

		//�޸�IE��¡����
		if����support.noCloneChecked &&��elem.nodeType === 1 || elem.nodeType === 11��&&
				��jQuery.isXMLDoc��elem����{

			//���ǳ�������ԭ��ܿ���Sizzle��http��//jsperf.com/getall-vs-sizzle/2
			destElements = getAll��clone��;
			srcElements = getAll��elem��;

			for��i = 0��l = srcElements.length; i <l; i ++��{
				fixInput��srcElements [i]��destElements [i]��;
			}
		}

		//���¼���ԭʼ���Ƶ���¡
		if��dataAndEvents��{
			if��deepDataAndEvents��{
				srcElements = srcElements || getAll��elem��;
				destElements = destElements || getAll��clone��;

				for��i = 0��l = srcElements.length; i <l; i ++��{
					cloneCopyEvent��srcElements [i]��destElements [i]��;
				}
			} else {
				cloneCopyEvent��elem��clone��;
			}
		}

		//�����ű�������ʷ��¼
		destElements = getAll��clone����script����;
		if��destElements.length> 0��{
			setGlobalEval��destElements����inPage && getAll��elem����script������;
		}

		//���ؿ�¡�ļ���
		���ؿ�¡;
	}��

	buildFragment��function��elems��context��scripts��selection��{
		var elem��tmp��tag��wrap��contains��j��
			fragment = context.createDocumentFragment������
			nodes = []��
			i = 0��
			l = elems.length;

		for��; i <l; i ++��{
			elem = elems [i];

			if��elem || elem === 0��{

				//ֱ����ӽڵ�
				if��jQuery.type��elem��===��object����{
					//֧�֣�QtWebKit��PhantomJS
					// push.apply��_��arraylike���׳����ϵ�WebKit
					jQuery.merge��nodes��elem.nodeType��[elem]��elem��;

				//����htmlת��Ϊ�ı��ڵ�
				} else if����rhtml.test��elem����{
					nodes.push��context.createTextNode��elem����;

				//��htmlת��ΪDOM�ڵ�
				} else {
					tmp = tmp || fragment.appendChild��context.createElement����div������;

					//�����л���׼��ʾ
					tag =��rtagName.exec��elem��|| [����������]��[1] .toLowerCase����;
					wrap = wrapMap [tag] || wrapMap._default;
					tmp.innerHTML = wrap [1] + elem.replace��rxhtmlTag����<$ 1> </ $ 2>����+ wrap [2];

					//ͨ����װ���½�����ȷ������
					j = wrap [0];
					while��j--��{
						tmp = tmp.lastChild;
					}

					//֧�֣�QtWebKit��PhantomJS
					// push.apply��_��arraylike���׳����ϵ�WebKit
					jQuery.merge��nodes��tmp.childNodes��;

					//��ס��������
					tmp = fragment.firstChild;

					//ȷ�������Ľڵ��ǹ����ģ���12392��
					tmp.textContent =����;
				}
			}
		}

		//��Ƭ����ɾ����װ��
		fragment.textContent =����;

		i = 0;
		while����elem = nodes [i ++]����{

			//��4087  - ���ԭʼԪ�غ�Ŀ��Ԫ����ͬ����Ϊ
			//�Ǹ�Ԫ�أ�ʲô������
			if��selection && jQuery.inArray��elem��selection����== -1��{
				����;
			}

			contains = jQuery.contains��elem.ownerDocument��elem��;

			//���ӵ�Ƭ��
			tmp = getAll��fragment.appendChild��elem������script����;

			//�����ű�������ʷ��¼
			if��������{
				setGlobalEval��tmp��;
			}

			//�����ִ���ļ�
			if��scripts��{
				j = 0;
				while����elem = tmp [j ++]����{
					if��rscriptType.test��elem.type ||��������{
						scripts.push��elem��;
					}
				}
			}
		}

		����Ƭ��;
	}��

	cleanData��function��elems��{
		var data��elem��type��key��
			special = jQuery.event.special��
			i = 0;

		for��;��elem = elems [i]����== undefined; i ++��{
			if��jQuery.acceptData��elem����{
				key = elem [data_priv.expando];

				if��key &&��data = data_priv.cache [key]����{
					if��data.events��{
						for������data.events��{
							if��special [type]��{
								jQuery.event.remove��elem��type��;

							//���Ǳ���jQuery.event.remove�����Ŀ�ݷ�ʽ
							} else {
								jQuery.removeEvent��elem��type��data.handle��;
							}
						}
					}
					if��data_priv.cache [key]��{
						//�����κ�ʣ��ġ�˽�ˡ�����
						delete data_priv.cache [key];
					}
				}
			}
			//�����κ�ʣ���`�û�'����
			delete data_user.cache [elem [data_user.expando]];
		}
	}
}��;

1.3�У�{
	text��function��value��{
		���ط��ʣ�this��function��value��{
			����ֵ=== undefined��
				jQuery.text��this����
				this.empty������each��function����{
					if��this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9��{
						this.textContent = value;
					}
				}��;
		}��null��value��arguments.length��;
	}��

	append��function����{
		return this.domManip��arguments��function��elem��{
			if��this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9��{
				var target = manipulationTarget��this��elem��;
				target.appendChild��elem��;
			}
		}��;
	}��

	prepend��function����{
		return this.domManip��arguments��function��elem��{
			if��this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9��{
				var target = manipulationTarget��this��elem��;
				target.insertBefore��elem��target.firstChild��;
			}
		}��;
	}��

	֮ǰ��function����{
		return this.domManip��arguments��function��elem��{
			if��this.parentNode��{
				this.parentNode.insertBefore��elem��this��;
			}
		}��;
	}��

	after��function����{
		return this.domManip��arguments��function��elem��{
			if��this.parentNode��{
				this.parentNode.insertBefore��elem��this.nextSibling��;
			}
		}��;
	}��

	remove��function��selector��keepData / *�����ڲ�ʹ��* /��{
		var elem��
			elems =ѡ������jQuery.filter��selector��this���������
			i = 0;

		for��;��elem = elems [i]����= null; i ++��{
			if����keepData && elem.nodeType === 1��{
				jQuery.cleanData��getAll��elem����;
			}

			if��elem.parentNode��{
				if��keepData && jQuery.contains��elem.ownerDocument��elem����{
					setGlobalEval��getAll��elem����script������;
				}
				elem.parentNode.removeChild��elem��;
			}
		}

		�黹���;
	}��

	empty��function����{
		var elem��
			i = 0;

		for��;��elem = this [i]����= null; i ++��{
			if��elem.nodeType === 1��{

				//��ֹ�ڴ�й©
				jQuery.cleanData��getAll��elem��false����;

				//ɾ������ʣ��Ľڵ�
				elem.textContent =����;
			}
		}

		�黹���;
	}��

	clone��function��dataAndEvents��deepDataAndEvents��{
		dataAndEvents = dataAndEvents == null��false��dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null��dataAndEvents��deepDataAndEvents;

		return this.map��function����{
			return jQuery.clone��this��dataAndEvents��deepDataAndEvents��;
		}��;
	}��

	html��function��value��{
		���ط��ʣ�this��function��value��{
			var elem = this [0] || {}��
				i = 0��
				l = this.length;

			if��value === undefined && elem.nodeType === 1��{
				return elem.innerHTML;
			}

			//���������Ƿ���Բ��ÿ�ݷ�ʽ��ʹ��innerHTML
			if��typeof value ===��string��&&��rnoInnerhtml.test��value��&&
				��wrapMap [��rtagName.exec��value��|| [����������]��[1] .toLowerCase����]��{

				value = value.replace��rxhtmlTag����<$ 1> </ $ 2>����;

				����{
					for��; i <l; i ++��{
						elem =��[i] || {};

						//ɾ��Ԫ�ؽڵ㲢��ֹ�ڴ�й©
						if��elem.nodeType === 1��{
							jQuery.cleanData��getAll��elem��false����;
							elem.innerHTML = value;
						}
					}

					elem = 0;

				//���ʹ��innerHTML�����쳣����ʹ��fallback����
				} catch��e��{}
			}

			if��elem��{
				this.empty������append��value��;
			}
		}��null��value��arguments.length��;
	}��

	replaceWith��function����{
		var arg = arguments [0];

		//���и��ģ����������滻ÿ��������Ԫ��
		this.domManip��arguments��function��elem��{
			arg = this.parentNode;

			jQuery.cleanData��getAll��this����;

			if��arg��{
				arg.replaceChild��elem��this��;
			}
		}��;

		//���û�������ݣ����磬���Կղ�������ǿ��ɾ��
		return arg &&��arg.length || arg.nodeType���������this.remove����;
	}��

	detach��function��selector��{
		return this.remove��selector��true��;
	}��

	domManip��function��args��callback��{

		//չƽ�κ�Ƕ������
		args = concat.apply��[]��args��;

		varƬ�Σ���һ�����ű���hasScripts��node��doc��
			i = 0��
			l = this.length��
			set = this��
			iNoClone = l  -  1��
			value = args [0]��
			isFunction = jQuery.isFunction��value��;

		//�����޷���WebKit�п�¡����checked�Ľڵ�Ƭ��
		if��isFunction ||
				��l> 1 && typeof value ===��string��&&
					��support.checkClone && rchecked.test��value������{
			return this.each��function��index��{
				var self = set.eq��index��;
				if��isFunction��{
					args [0] = value.call��this��index��self.html������;
				}
				self.domManip��args��callback��;
			}��;
		}

		if��l��{
			fragment = jQuery.buildFragment��args��this [0] .ownerDocument��false��this��;
			first = fragment.firstChild;

			if��fragment.childNodes.length === 1��{
				fragment = first;
			}

			if��first��{
				scripts = jQuery.map��getAll��fragment����script������disableScript��;
				hasScripts = scripts.length;

				//ʹ��ԭʼƬ�δ������һ����Ŀ����Ϊ�����ܻ����
				//��ĳЩ����±��������գ���8070����
				for��; i <l; i ++��{
					node = fragment;

					if��i��== iNoClone��{
						node = jQuery.clone��node��true��true��;

						//�����Կ�¡�ű������ã��Ա��Ժ�ָ�
						if��hasScripts��{
							//֧�֣�QtWebKit
							// jQuery.merge��Ϊpush.apply��_��arraylike���׳�
							jQuery.merge��scripts��getAll��node����script������;
						}
					}

					callback.call��this [i]��node��i��;
				}

				if��hasScripts��{
					doc = scripts [scripts.length  -  1] .ownerDocument;

					//�������ýű�
					jQuery.map��scripts��restoreScript��;

					//�ڵ�һ���ĵ�����ʱ������ִ�нű�
					for��i = 0; i <hasScripts; i ++��{
						node = scripts [i];
						if��rscriptType.test��node.type ||������&&
							��data_priv.access��node����globalEval����&& jQuery.contains��doc��node����{

							if��node.src��{
								//��ѡ��AJAX�����������������򲻻����нű�
								if��jQuery._evalUrl��{
									jQuery._evalUrl��node.src��;
								}
							} else {
								jQuery.globalEval��node.textContent.replace��rcleanScript����������;
							}
						}
					}
				}
			}
		}

		�黹���;
	}
}��;

jQuery.each��{
	appendTo����׷�ӡ���
	prependTo����prepend����
	insertBefore����before����
	insertAfter����after����
	replaceAll����replaceWith��
}��function��name��original��{
	jQuery.fn [name] = function��selector��{
		var elems��
			ret = []��
			insert = jQuery��selector����
			last = insert.length  -  1��
			i = 0;

		for��; i <= last; i ++��{
			elems = i ===��������this.clone��true��;
			jQuery��insert [i]��[original]��elems��;

			//֧�֣�QtWebKit
			// .get������Ϊpush.apply��_��arraylike���׳�
			push.apply��ret��elems.get������;
		}

		return this.pushStack��ret��;
	};
}��;


var iframe��
	elemdisplay = {};

/ **
 *����Ԫ�ص�ʵ����ʾ
 * @param {String} name��Ԫ�ص�nodeName
 * @param {Object} doc�ĵ�����
 * /
//����defaultDisplay�е���
function actualDisplay��name��doc��{
	var���
		elem = jQuery��doc.createElement��name������appendTo��doc.body����

		// getDefaultComputedStyle����ֻ���ڸ���Ԫ���Ͽɿ���ʹ��
		display = window.getDefaultComputedStyle &&��style = window.getDefaultComputedStyle��elem [0]������

			//ʹ�ô˷�����һ����ʱ�޸����������Ż�����ֱ�����õķ�ʽ���֣�
			//��Ϊ���Ѵӹ淶��ɾ��������FF����֧��
			style.display��jQuery.css��elem [0]����display����;

	//����û���κ����ݴ洢��Ԫ���ϣ�
	//����ʹ�á�detach��������Ϊ����Ԫ�صĿ��ٷ���
	elem.detach����;

	������ʾ;
}

/ **
 *����ȷ��Ԫ�ص�Ĭ����ʾֵ
 * @param {String} nodeName
 * /
function defaultDisplay��nodeName��{
	var doc = document��
		display = elemdisplay [nodeName];

	if����display��{
		display = actualDisplay��nodeName��doc��;

		//����򵥷���ʧ�ܣ����iframe�ڲ���ȡ
		if��display ===��none��||��display��{

			//������ܣ���ʹ���Ѵ�����iframe
			iframe =��iframe || jQuery����<iframe frameborder ='0'width ='0'height ='0'/>��������appendTo��doc.documentElement��;

			//���Ǳ�дһ���µ�HTML��ܣ��Ա�Webkit��Firefox�����ظ�ʹ��
			doc = iframe [0] .contentDocument;

			//֧�֣�IE
			doc.write����;
			doc.close����;

			display = actualDisplay��nodeName��doc��;
			iframe.detach����;
		}

		//�洢��ȷ��Ĭ����ʾ
		elemdisplay [nodeName] = display;
	}

	������ʾ;
}
var rmargin =��/ ^ margin /��;

var rnumnonpx = new RegExp����^����+ pnum +������?! px��[az��] + $������i����;

var getStyles = function��elem��{
		//֧�֣�IE <= 11 +��Firefox <= 30 +����15098����14150��
		// IE���׳����������д�����Ԫ��
		// FFͬʱͨ����defaultView.getComputedStyle���׳����Ԫ��
		if��elem.ownerDocument.defaultView.opener��{
			return elem.ownerDocument.defaultView.getComputedStyle��elem��null��;
		}

		return window.getComputedStyle��elem��null��;
	};



function curCSS��elem��name��calculated��{
	var width��minWidth��maxWidth��ret��
		style = elem.style;

	computed = computed || getStyles��elem��;

	//֧�֣�IE9
	//ֻ��.css��'������'������ҪgetPropertyValue����12537��
	if��computed��{
		ret = computed.getPropertyValue��name��|| ����[����];
	}

	if��computed��{

		if��ret ===����&&��jQuery.contains��elem.ownerDocument��elem����{
			ret = jQuery.style��elem��name��;
		}

		//֧�֣�iOS <6
		//�¾�Dean Edwards�����˾�η�ĺڿ͡�
		// iOS <6�����٣�����һ��ϴ�ֵ�İٷֱȣ�������ƺ��ǿɿ�������
		//��Υ����CSSOM�ݰ��淶��http��//dev.w3.org/csswg/cssom/#resolved-values
		if��rnumnonpx.test��ret��&& rmargin.test��name����{

			//��סԭʼֵ
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			//������ֵ�Ի�ȡ����ֵ
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			//�ָ����ĵ�ֵ
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret��== undefined��
		//֧�֣�IE
		// IE��zIndexֵ��Ϊ�������ء�
		ret +������
		RET;
}


function addGetHookIf��conditionFn��hookFn��{
	//���平�ӣ����ȷʵ��Ҫ�����ǽ��ڵ�һ������ʱ��顣
	����{
		get��function����{
			if��conditionFn������{
				//����Ҫ���ӣ����߲�����ʹ����
				//ȱ���������ɾ������
				ɾ��this.get;
				����;
			}

			//��Ҫ����; ���¶������Ա㲻��ִ��֧�ֲ��ԡ�
			return��this.get = hookFn��.apply��this��arguments��;
		}
	};
}


��function����{
	var pixelPositionVal��boxSizingReliableVal��
		docElem = document.documentElement��
		container = document.createElement����div������
		div = document.createElement����div����;

	if����div.style��{
		����;
	}

	//֧�֣�IE9-11 +
	//��¡Ԫ�ص���ʽ��Ӱ���¡��ԴԪ�أ���8908��
	div.style.backgroundClip =��content-box��;
	div.cloneNode��true��.style.backgroundClip =����;
	support.clearCloneStyle = div.style.backgroundClip ===��content-box��;

	container.style.cssText =��border��0; width��0; height��0; top��0; left��-9999px; margin-top��1px;�� +
		��λ�ã����ԡ�;
	container.appendChild��div��;

	//ִ��pixelPosition��boxSizingReliable����ֻ��Ҫһ������
	//��������ͬʱ��ִ���Ա���ڶ������㡣
	function computePixelPositionAndBoxSizingReliable����{
		div.style.cssText =
			//֧�֣�Firefox <29��Android 2.3
			//��Ӧ��ǰ׺���С����
			��-webkit-�д�С���߽��; -moz-�д�С���߽��;�� +
			��ͼ���Ͻ����߽��;��ʾ����;�߾ࣺ1��;������1��;�� +
			���߽磺1px��;��䣺1px��;��ȣ�4����;λ�ã����ԡ�;
		div.innerHTML =����;
		docElem.appendChild��container��;

		var divStyle = window.getComputedStyle��div��null��;
		pixelPositionVal = divStyle.top��==��1����;
		boxSizingReliableVal = divStyle.width ===��4px��;

		docElem.removeChild��container��;
	}

	//֧�֣�node.js jsdom
	//��Ҫ��ΪgetComputedStyle��ȫ�ֶ��������
	if��window.getComputedStyle��{
		jQuery.extend��support��{
			pixelPosition��function����{

				//�����??��ִֻ��һ�Σ���������Ȼ���м���
				//��Ϊ���ǿ���ʹ��boxSizingReliableԤ���㡣
				//����Ҫ�������Ƿ��Ѿ�ִ�й���
				computePixelPositionAndBoxSizingReliable����;
				return pixelPositionVal;
			}��
			boxSizingReliable��function����{
				if��boxSizingReliableVal == null��{
					computePixelPositionAndBoxSizingReliable����;
				}
				return boxSizingReliableVal;
			}��
			reliableMarginRight��function����{

				//֧�֣�Android 2.3
				//���div�Ƿ������ȷ�Ŀ����û���ұߵĴ���
				//���������Ŀ�ȼ���margin-right������3333��
				// WebKit Bug 13343  -  getComputedStyleΪmargin-right���ش����ֵ
				//��֧�ֹ��ܽ�ִ��һ�Σ���˲���Ҫ���䡣
				var ret��
					marginDiv = div.appendChild��document.createElement����div������;

				//����CSS��box-sizing; ��ʾ; ����; �߽�; ���
				marginDiv.style.cssText = div.style.cssText =
					//֧�֣�Firefox <29��Android 2.3
					//��Ӧ��ǰ׺���С����
					��-webkit-�д�С��������; -moz-���С��������;�� +
					����ʽʩ�������ݺ�;��ʾ����;��Ե��0;�߽磺0;��䣺0��;
				marginDiv.style.marginRight = marginDiv.style.width =��0��;
				div.style.width =��1px��;
				docElem.appendChild��container��;

				ret =��parseFloat��window.getComputedStyle��marginDiv��null��.marginRight��;

				docElem.removeChild��container��;
				div.removeChild��marginDiv��;

				����;
			}
		}��;
	}
}������;


//һ�ֿ��ٽ���/���CSS�����Ի����ȷ����ķ�����
jQuery.swap = function��elem��options��callback��args��{
	var ret��name��
		old = {};

	//��ס��ֵ��Ȼ�������ֵ
	for��ѡ���е����ƣ�{
		old [name] = elem.style [name];
		elem.style [name] = options [name];
	}

	ret = callback.apply��elem��args || []��;

	//�ָ���ֵ
	for��ѡ���е����ƣ�{
		elem.style [name] = old [name];
	}

	����;
};


VAR
	//�����ʾΪnone�����ԡ�table������table-cell����table-caption��֮��ı�ͷ������Խ���
	//�ڴ˴��鿴��ʾֵ��https��//developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp����^����+ pnum +��������*��$������i������
	rrelNum = new RegExp����^��[+  - ]��=����+ pnum +����������i������

	cssShow = {position����absolute����visibility����hidden����display����block��}��
	cssNormalTransform = {
		letterSpacing����0����
		fontWeight����400��
	}��

	cssPrefixes = [��Webkit������O������Moz������ms��];

//����ӳ�䵽Ǳ�ڹ�Ӧ��ǰ׺���Ե�css����
function vendorPropName��style��name��{

	//�ǹ�Ӧ��ǰ׺�����ƵĿ�ݷ�ʽ
	if����ʽ���ƣ�{
		��������;
	}

	//��鹩Ӧ�̵�ǰ׺����
	var capName = name [0] .toUpperCase����+ name.slice��1����
		origName = name��
		i = cssPrefixes.length;

	���� -  �� {
		name = cssPrefixes [i] + capName;
		if����ʽ���ƣ�{
			��������;
		}
	}

	return origName;
}

function setPositiveNumber��elem��value��subtract��{
	var matches = rnumsplit.exec��value��;
	�ع������
		//��ֹδ����ġ���ȥ�������磬��cssHooks��ʹ��ʱ
		Math.max��0��ƥ��[1]  - ����ȥ|| 0����+��ƥ��[2] ||��px������
		ֵ;
}

function augmentWidthOrHeight��elem��name��extra��isBorderBox��styles��{
	var i = extra ===��isBorderBox����border������content������
		//��������Ѿ�������ȷ�Ĳ��������������
		4��
		//�����ʼ��ˮƽ��ֱ����
		name ===��width����1��0��

		val = 0;

	for��; i <4; i + = 2��{
		//������ģ�Ͷ��������߾࣬��������Ҫ���������
		if��extra ===��margin����{
			val + = jQuery.css��elem��extra + cssExpand [i]��true��styles��;
		}

		if��isBorderBox��{
			// border-box������䣬���������Ҫ���ݣ��뽫��ɾ��
			if��extra ===��content����{
				val  -  = jQuery.css��elem����padding��+ cssExpand [i]��true��styles��;
			}

			//��ʱ�����ⲻ�Ǳ߿�Ҳ���Ǳ߾࣬�����ɾ���߿�
			if��extra��==��margin����{
				val  -  = jQuery.css��elem����border��+ cssExpand [i] +��Width����true��styles��;
			}
		} else {
			//��ʱ��extra����content������������
			val + = jQuery.css��elem����padding��+ cssExpand [i]��true��styles��;

			//��ʱ��extra��������Ҳ������䣬������ӱ߿�
			if��extra��==��padding����{
				val + = jQuery.css��elem����border��+ cssExpand [i] +��Width����true��styles��;
			}
		}
	}

	����;
}

function getWidthOrHeight��elem��name��extra��{

	//��offset���Կ�ͷ�����൱��border-boxֵ
	var valueIsBorderBox = true��
		val = name ===��width����elem.offsetWidth��elem.offsetHeight��
		styles = getStyles��elem����
		isBorderBox = jQuery.css��elem����boxSizing����false��styles��===��border-box��;

	//ĳЩ��htmlԪ��ΪoffsetWidth����undefined���������null / undefined
	// svg  -  https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML  -  https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if��val <= 0 || val == null��{
		//����б�Ҫ�����˵�����Ȼ��δ�����css
		val = curCSS��elem��name��styles��;
		if��val <0 || val == null��{
			val = elem.style [name];
		}

		//���㵥λ�������ء�ͣ������Ȼ�������
		if��rnumnonpx.test��val����{
			����;
		}

		//�����������ز��ɿ���ֵ��������ʽ
		//ΪgetComputedStyleĬĬ�ػع鵽�ɿ���elem.style
		valueIsBorderBox = isBorderBox &&
			��support.boxSizingReliable����|| val === elem.style [name]��;

		//��׼���������Զ�����׼�������
		val = parseFloat��val��|| 0;
	}

	//ʹ�û�Ŀ��Сģ�������/��ȥ����ص���ʽ
	�ع飨val +
		augmentWidthOrHeight��
			ELEM��
			���ƣ�
			�����|| ��isBorderBox����border������content������
			valueIsBorderBox��
			��ʽ
		��
	��+��px��;
}

function showHide��elements��show��{
	var display��elem��hidden��
		values = []��
		index = 0��
		length = elements.length;

	for��; index <length; index ++��{
		elem = elements [index];
		if����elem.style��{
			����;
		}

		values [index] = data_priv.get��elem����olddisplay����;
		display = elem.style.display;
		if��show��{
			//���ô�Ԫ�ص�������ʾ���˽����Ƿ����
			//�������������ػ�����
			if����values [index] && display ===��none����{
				elem.style.display =����;
			}

			//������ʹ��display��none���ǵ�Ԫ��
			//����ʽ���У�����Ĭ�ϵ��������ʽ��ʲô
			//����������Ԫ��
			if��elem.style.display ===����&& isHidden��elem����{
				values [index] = data_priv.access��elem����olddisplay����defaultDisplay��elem.nodeName����;
			}
		} else {
			hidden = isHidden��elem��;

			if��display��==��none��||��hidden��{
				data_priv.set��elem����olddisplay�������أ�display��jQuery.css��elem����display������;
			}
		}
	}

	//�ڵڶ���ѭ�������ô����Ԫ�ص���ʾ
	//���ⲻ�ϵĻ���
	for��index = 0; index <length; index ++��{
		elem = elements [index];
		if����elem.style��{
			����;
		}
		if����show || elem.style.display ===��none��|| elem.style.display ===������{
			elem.style.display = show��ֵ[index] || ���� �� ��û�С�;
		}
	}

	����Ԫ��;
}

jQuery.extend��{

	//�����ʽ���Թҹ��Ը���Ĭ��ֵ
	//��ȡ��������ʽ���Ե���Ϊ
	cssHooks��{
		��͸���ȣ�{
			get��function��elem��computed��{
				if��computed��{

					//����Ӧ�����ǴӲ�͸�����л�ȡһ������
					var ret = curCSS��elem����opacity����;
					return ret ===��������1����ret;
				}
			}
		}
	}��

	//��Ҫ�Զ�����px����ӵ���Щ�����޵�Ԫ��������
	cssNumber��{
		��columnCount�����ǵģ�
		��fillOpacity�����ǵģ�
		��flexGrow�����ǵģ�
		��flexShrink�����ǵģ�
		��fontWeight�����ǵģ�
		��lineHeight�����ǵģ�
		����͸�������ǵģ�
		�����򡱣��ǵģ�
		���¶������ǵģ�
		���Ѹ������ǵģ�
		��zIndex�����ǵģ�
		�����š����ǵ�
	}��

	//�����ǰҪ�޸������Ƶ�����
	//���û��ȡֵ
	cssProps��{
		������������cssFloat��
	}��

	//��DOM�ڵ��ϻ�ȡ��������ʽ����
	style��function��elem��name��value��extra��{

		//��Ҫ���ı���ע�ͽڵ���������ʽ
		if����elem || elem.nodeType === 3 || elem.nodeType === 8 ||��elem.style��{
			����;
		}

		//ȷ������ʹ����ȷ������
		var ret��type��hooks��
			origName = jQuery.camelCase��name����
			style = elem.style;

		name = jQuery.cssProps [origName] || ��jQuery.cssProps [origName] = vendorPropName��style��origName����;

		//��ȡǰ׺�汾�Ĺ��ӣ�Ȼ����δ��ǰ׺�İ汾
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//��������Ƿ�������ֵ
		if��value��== undefined��{
			type = typeof value;

			//����+ =���� -  =��ת��Ϊ������֣���7345��
			if��type ===��string��&&��ret = rrelNum.exec��value������{
				value =��ret [1] + 1��* ret [2] + parseFloat��jQuery.css��elem��name����;
				//�޸��˴���9237
				type =��number��;
			}

			//ȷ��δ����null��NaNֵ����7116��
			if��value == null || value��== value��{
				����;
			}

			//��������֣��뽫'px'��ӵ���ĳЩCSS���Գ��⣩
			if��type ===��number��&&��jQuery.cssNumber [origName]��{
				value + =��px��;
			}

			//֧�֣�IE9-11 +
			// background- * propsӰ��ԭʼ��¡��ֵ
			if����support.clearCloneStyle && value ===����&& name.indexOf����background����=== 0��{
				style [name] =��inherit��;
			}

			//����ṩ��һ�����ӣ���ʹ�ø�ֵ������ֻ������ָ����ֵ
			if����hooks ||�����ҹ��еġ�set����||��value = hooks.set��elem��value��extra������== undefined��{
				style [name] = value;
			}

		} else {
			//����ṩ��һ�����ӣ���ô������õ��Ǽ���ֵ
			if��hooks &&��get��in hooks &&��ret = hooks.get��elem��false��extra������== undefined��{
				����;
			}

			//����ֻ����ʽ�����л�ȡֵ
			������ʽ[����];
		}
	}��

	css��function��elem��name��extra��styles��{
		var val��num��hooks��
			origName = jQuery.camelCase��name��;

		//ȷ������ʹ����ȷ������
		name = jQuery.cssProps [origName] || ��jQuery.cssProps [origName] = vendorPropName��elem.style��origName����;

		//���Դ�ǰ׺�����ƣ����δ��ǰ׺������
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//����ṩ��һ�����ӣ���ô�������ȡ����ֵ
		if��hooks &&��get��in hooks��{
			val = hooks.get��elem��true��extra��;
		}

		//����������ڻ�ȡ����ֵ�ķ�������ʹ����
		if��val === undefined��{
			val = curCSS��elem��name��styles��;
		}

		//����normal��ת��Ϊ����ֵ
		if��val ===��normal��&& cssNormalTransform�е�name��{
			val = cssNormalTransform [name];
		}

		//���ǿ���ṩ���ֻ��ṩ�޶�����val������������
		if��extra ===����|| extra��{
			num = parseFloat��val��;
			return extra === true || jQuery.isNumeric��num����num || 0��val;
		}
		����;
	}
}��;

jQuery.each��[��height������width��]��function��i��name��{
	jQuery.cssHooks [name] = {
		get��function��elem��computed��extra��{
			if��computed��{

				//����������ε���ʾ���ǣ�ĳЩԪ�ؿ�����ά����Ϣ
				//���������������ĵ�ǰ��ʾ��ʽ
				return rdisplayswap.test��jQuery.css��elem����display������&& elem.offsetWidth === 0��
					jQuery.swap��elem��cssShow��function����{
						return getWidthOrHeight��elem��name��extra��;
					}����
					getWidthOrHeight��elem��name��extra��;
			}
		}��

		set��function��elem��value��extra��{
			var styles = extra && getStyles��elem��;
			return setPositiveNumber��elem��value��extra��
				augmentWidthOrHeight��
					ELEM��
					���ƣ�
					���⣬
					jQuery.css��elem����boxSizing����false��styles��===��border-box����
					��ʽ
				����0
			��;
		}
	};
}��;

//֧�֣�Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf��support.reliableMarginRight��
	function��elem��calculated��{
		if��computed��{
			return jQuery.swap��elem��{��display������inline-block��}��
				curCSS��[elem����marginRight��]��;
		}
	}
��;

//����ʹ����Щ��������չ����
jQuery.each��{
	��֤�𣺡�����
	��䣺������
	�߿򣺡���ȡ�
}��function��prefix��suffix��{
	jQuery.cssHooks [prefix + suffix] = {
		expand��function��value��{
			var i = 0��
				expanded = {}��

				//��������ַ����������һ������
				parts = typeof value ===��string����value.split����������[value];

			for��; i <4; i ++��{
				expanded [prefix + cssExpand [i] + suffix] =
					����[i] || ���[i  -  2] || ���[0];
			}

			�ع�����;
		}
	};

	if����rmargin.test��prefix����{
		jQuery.cssHooks [prefix + suffix] .set = setPositiveNumber;
	}
}��;

1.3�У�{
	css��function��name��value��{
		���ط���Ȩ�ޣ�this��function��elem��name��value��{
			var styles��len��
				map = {}��
				i = 0;

			if��jQuery.isArray��name����{
				styles = getStyles��elem��;
				len = name.length;

				for��; i <len; i ++��{
					map [name [i]] = jQuery.css��elem��name [i]��false��styles��;
				}

				���ص�ͼ;
			}

			����ֵ��== undefined��
				jQuery.style��elem��name��value����
				jQuery.css��elem��name��;
		}��name��value��arguments.length> 1��;
	}��
	show��function����{
		return showHide��this��true��;
	}��
	hide��function����{
		return showHide��this��;
	}��
	toggle��function��state��{
		if��typeof state ===��boolean����{
			����״̬��this.show������this.hide����;
		}

		return this.each��function����{
			if��isHidden��this����{
				jQuery��this��.show����;
			} else {
				jQuery��this��.hide����;
			}
		}��;
	}
}��;


function Tween��elem��options��prop��end��easing��{
	�����µ�Tween.prototype.init��elem��options��prop��end��easing��;
}
jQuery.Tween = Tween;

Tween.prototype = {
	���캯����Tween��
	init��function��elem��options��prop��end��easing��unit��{
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || ��ҡ�ڡ�;
		this.options = options;
		this.start = this.now = this.cur����;
		this.end = end;
		this.unit = unit || ��jQuery.cssNumber [prop]����������px����;
	}��
	cur��function����{
		var hooks = Tween.propHooks [this.prop];

		return hooks && hooks.get��
			hooks.get��this����
			Tween.propHooks._default.get��this��;
	}��
	run��function��percent��{
		��
			hooks = Tween.propHooks [this.prop];

		if��this.options.duration��{
			this.pos = eased = jQuery.easing [this.easing]��
				����this.options.duration * percent��0,1��this.options.duration
			��;
		} else {
			this.pos = eased = percent;
		}
		this.now =��this.end  -  this.start��* eased + this.start;

		if��this.options.step��{
			this.options.step.call��this.elem��this.now��this��;
		}

		if��hooks && hooks.set��{
			hooks.set��this��;
		} else {
			Tween.propHooks._default.set��this��;
		}
		�黹���;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default��{
		get��function��tween��{
			�������;

			if��tween.elem [tween.prop]��= null &&
				����tween.elem.style || tween.elem.style [tween.prop] == null����{
				return tween.elem [tween.prop];
			}

			//��һ�����ַ�����Ϊ�������������ݸ�.css���Զ�ִ��
			//�������ʧ�ܣ�����parseFloat�����˵��ַ�����
			//���򵥵�ֵ�����硰10px��������ΪFloat;
			//��ԭ�����ظ���ֵ�����硰rotate��1rad������
			result = jQuery.css��tween.elem��tween.prop��������;
			//���ַ�����null��undefined�͡�auto��ת��Ϊ0��
			���أ����|| ���===���Զ�����0�����;
		}��
		set��function��tween��{
			//ʹ�ò��蹳�ӽ��з��㡣
			//�����������ʹ��cssHook��
			//ʹ��.style��������ã���ʹ�ÿ��õ���ͨ���ԡ�
			if��jQuery.fx.step [tween.prop]��{
				jQuery.fx.step [tween.prop]�����䣩;
			} else if��tween.elem.style &&��tween.elem.style [jQuery.cssProps [tween.prop]]��= null || jQuery.cssHooks [tween.prop]����{
				jQuery.style��tween.elem��tween.prop��tween.now + tween.unit��;
			} else {
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
};

//֧�֣�IE9
//���ڿֻŵķ����ڶϿ����ӵĽڵ������ö���
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set��function��tween��{
		if��tween.elem.nodeType && tween.elem.parentNode��{
			tween.elem [tween.prop] = tween.now;
		}
	}
};

jQuery.easing = {
	linear��function��p��{
		����p;
	}��
	swing��function��p��{
		����0.5  -  Math.cos��p * Math.PI��/ 2;
	}
};

jQuery.fx = Tween.prototype.init;

//����Compat <1.8��չ��
jQuery.fx.step = {};




VAR
	fxNow��timerId��
	rfxtypes = / ^������toggle | show | hide��$ /��
	rfxnum = new RegExp����^����:( [+  - ]��= |������+ pnum +������[az��] *��$������i������
	rrun = / queueHooks $ /��
	animationPrefilters = [defaultPrefilter]��
	tweeners = {
		��*����[function��prop��value��{
			var tween = this.createTween��prop��value����
				target = tween.cur������
				parts = rfxnum.exec��value����
				unit = parts && parts [3] || ��jQuery.cssNumber [prop]����������px������

				//Ǳ�ڵĵ�λ��ƥ����Ҫ��ʼֵ����
				start =��jQuery.cssNumber [prop] || unit��==��px��&& + target��&&
					rfxnum.exec��jQuery.css��tween.elem��prop������
				scale = 1��
				maxIterations = 20;

			if��start && start [3]��== unit��{
				// jQuery.css��������ε�λ
				unit = unit || ��ʼ[3];

				//ȷ�������Ժ���²�������
				parts = parts || [];

				//�ӷ����������ƽ�
				start = + target || 1;

				��{
					//�����һ�ε������㣬��ӱ���ֱ���õ�*ĳ��*��
					//ʹ���ַ����ӱ����������ǾͲ�������ؿ�������ı�������
					scale = scale || �� 0.5" ;

					//������Ӧ��
					start = start / scale;
					jQuery.style��tween.elem��prop��start + unit��;

				//���±�������tween.cur�����������NaN��
				//�����ģ�����������������������Ѿ��㹻�Ļ����ʹ���ѭ��
				} while��scale��==��scale = tween.cur����/ target��&& scale��== 1 &&  -  maxIterations��;
			}

			//���²�������
			if��parts��{
				start = tween.start = + start || +Ŀ��|| 0;
				tween.unit = unit;
				//����ṩ��һ��+ = /  -  =��ǣ�����������һ����Զ���
				tween.end = parts [1]��
					��ʼ+������[1] + 1��*����[2]��
					+����[2];
			}

			���ز���;
		}]
	};

//ͬ�������Ķ�����ͬ������
function createFxNow����{
	setTimeout��function����{
		fxNow = undefined;
	}��;
	return��fxNow = jQuery.now������;
}

//���ɲ����Դ�����׼����
function genFx��type��includeWidth��{
	var�ĸ���
		i = 0��
		attrs = {height��type};

	//������ǰ���width���򲽳�ֵΪ1��ִ������cssExpandֵ��
	//���򲽳�ֵΪ2����������
	includeWidth = includeWidth��1��0;
	for��; i <4; i + = 2  -  includeWidth��{
		which = cssExpand [i];
		attrs [��margin��+ which] = attrs [��padding��+ which] = type;
	}

	if��includeWidth��{
		attrs.opacity = attrs.width = type;
	}

	����;
}

function createTween��value��prop��animation��{
	var tween��
		collection =��tweeners [prop] || []��.concat��tweeners [��*��]����
		index = 0��
		length = collection.length;
	for��; index <length; index ++��{
		if����tween = collection [index] .call��animation��prop��value������{

			//�����Ѿ�������������
			���ز���;
		}
	}
}

function defaultPrefilter��elem��props��opts��{
	/ * jshint validthis��true * /
	var prop��value��toggle��tween��hooks��oldfire��display��checkDisplay��
		����=�����
		orig = {}��
		style = elem.style��
		hidden = elem.nodeType && isHidden��elem����
		dataShow = data_priv.get��elem����fxshow����;

	//������У���ٳ�ŵ
	if����opts.queue��{
		hooks = jQuery._queueHooks��elem����fx����;
		if��hooks.unqueued == null��{
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function����{
				if����hooks.unqueued��{
					oldfire����;
				}
			};
		}
		hooks.unqueued ++;

		anim.always��function����{
			//ȷ�������֮ǰ���������Ĵ������
			anim.always��function����{
				hooks.unqueued--;
				if����jQuery.queue��elem����fx������length��{
					hooks.empty.fire����;
				}
			}��;
		}��;
	}

	//�߶�/������ͨ��
	if��elem.nodeType === 1 &&�������еġ��߶ȡ�|�����еġ�width������{
		//ȷ��û���κζ���͵͵����
		//��¼����3��������ԣ���ΪIE9-10û��
		//��overflowX��ʱ����overflow����
		// overflowY����Ϊ��ͬ��ֵ
		opts.overflow = [style.overflow��style.overflowX��style.overflowY];

		//����ʾ��������Ϊ�߶�/��ȵ�������
		//�Ծ��п��/�߶ȶ���������Ԫ�صĶ���
		display = jQuery.css��elem����display����;

		//�����ʾ��ǰΪ���ޡ��������Ĭ����ʾ
		checkDisplay = display ===��none����
			data_priv.get��elem����olddisplay����|| defaultDisplay��elem.nodeName����display;

		if��checkDisplay ===��inline��&& jQuery.css��elem����float����===��none����{
			style.display =��inline-block��;
		}
	}

	if��opts.overflow��{
		style.overflow =��hidden��;
		anim.always��function����{
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		}��;
	}

	//��ʾ/���ش���
	for��prop in���ߣ�{
		value = props [prop];
		if��rfxtypes.exec��value����{
			ɾ������[prop];
			toggle = toggle || value ===��toggle��;
			if��value ===��hidden����hide������show������{

				//�����ֹͣ�����ػ���ʾ��������dataShow�����ǽ�����show������Ӧ�ü�װ����
				if��value ===��show��&& dataShow && dataShow [prop]��== undefined��{
					hidden = true;
				} else {
					����;
				}
			}
			orig [prop] = dataShow && dataShow [prop] || jQuery.style��elem��prop��;

		//�κη�fxֵ������ֹ���ǻָ�ԭʼ��ʾֵ
		} else {
			display = undefined;
		}
	}

	if����jQuery.isEmptyObject��orig����{
		if��dataShow��{
			if��dataShow�еġ�hidden����{
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access��elem����fxshow����{}��;
		}

		//�洢״̬����������л� - ����.stop������toggle������������
		if��toggle��{
			dataShow.hidden =��hidden;
		}
		if��hidden��{
			jQuery��elem��.show����;
		} else {
			anim.done��function����{
				jQuery��elem��.hide����;
			}��;
		}
		anim.done��function����{
			var prop;

			data_priv.remove��elem����fxshow����;
			for��prop in orig��{
				jQuery.style��elem��prop��orig [prop]��;
			}
		}��;
		for��prop in orig��{
			tween = createTween��hidden��dataShow [prop]��0��prop��anim��;

			if��������dataShow��Ϊprop����{
				dataShow [prop] = tween.start;
				if��hidden��{
					tween.end = tween.start;
					tween.start = prop ===��width��|| ����===����ߡ���1��0;
				}
			}
		}

	//�������һ������.hide������hide������noop����ָ����ǵ���ʾֵ
	} else if����display ===��none����defaultDisplay��elem.nodeName����display��===��inline����{
		style.display = display;
	}
}

function propFilter��props��specialEasing��{
	var index��name��easing��value��hooks;

	// camelCase��specialEasing��չ��cssHook����
	for�������е�������{
		name = jQuery.camelCase��index��;
		easing = specialEasing [name];
		value = props [index];
		if��jQuery.isArray��value����{
			easing = value [1];
			value = props [index] = value [0];
		}

		if��index��== name��{
			����[����] =��ֵ;
			ɾ������[����];
		}

		hooks = jQuery.cssHooks [name];
		if��hooks &&��expand��in hooks��{
			value = hooks.expand��value��;
			ɾ������[����];

			//����ȫ��$ .extend���ⲻ�Ḳ�����е���Կ��
			//����'index'��Ϊ��������ȷ�ġ����֡�
			for��index in value��{
				if������props in props����{
					props [index] = value [index];
					specialEasing [index] =����;
				}
			}
		} else {
			specialEasing [name] = easing;
		}
	}
}

function������elem��properties��options��{
	var�����
		ͣ��������
		index = 0��
		length = animationPrefilters.length��
		deferred = jQuery.Deferred������always��function����{
			//��Ҫƥ�䣺����ѡ�����е�elem
			ɾ��tick.elem;
		}����
		tick = function����{
			if����ֹͣ��{
				�������;
			}
			var currentTime = fxNow || createFxNow����
				remaining = Math.max��0��animation.startTime + animation.duration  -  currentTime����
				//֧�֣�Android 2.3
				//��ʱ�ı���bug����������ʹ��`1  - ��0.5 || 0��`����12497��
				temp = remaining / animation.duration || 0��
				�ٷֱ�= 1  - ��ʱ��
				index = 0��
				length = animation.tweens.length;

			for��; index <length; index ++��{
				animation.tweens [index] .run��percent��;
			}

			deferred.notifyWith��elem��[animation��percent��remaining]��;

			if��percent <1 && length��{
				����ʣ��;
			} else {
				deferred.resolveWith��elem��[animation]��;
				�������;
			}
		}��
		animation = deferred.promise��{
			elem��elem��
			props��jQuery.extend��{}��properties����
			opts��jQuery.extend��true��{specialEasing��{}}��options����
			originalProperties�����ԣ�
			originalOptions��ѡ�
			startTime��fxNow || createFxNow����
			duration��options.duration��
			���䣺[]��
			createTween��function��prop��end��{
				var tween = jQuery.Tween��elem��animation.opts��prop��end��
						animation.opts.specialEasing [prop] || animation.opts.easing��;
				animation.tweens.push��tween��;
				���ز���;
			}��
			stop��function��gotoEnd��{
				var index = 0��
					//�������Ҫ������������Ҫ�������еĲ���
					//�������������ⲿ��
					length = gotoEnd��animation.tweens.length��0;
				if����ֹͣ��{
					�黹���;
				}
				ֹͣ=��;
				for��; index <length; index ++��{
					animation.tweens [index] .run��1��;
				}

				//�����ǲ������һ֡ʱ����; ���򣬾ܾ�
				if��gotoEnd��{
					deferred.resolveWith��elem��[animation��gotoEnd]��;
				} else {
					deferred.rejectWith��elem��[animation��gotoEnd]��;
				}
				�黹���;
			}
		}����
		props = animation.props;

	propFilter��props��animation.opts.specialEasing��;

	for��; index <length; index ++��{
		result = animationPrefilters [index] .call��animation��elem��props��animation.opts��;
		if��result��{
			���ؽ��;
		}
	}

	jQuery.map��props��createTween��animation��;

	if��jQuery.isFunction��animation.opts.start����{
		animation.opts.start.call��elem��animation��;
	}

	jQuery.fx.timer��
		jQuery.extend��tick��{
			elem��elem��
			������������
			queue��animation.opts.queue
		}��
	��;

	//����ѡ��Ļص�
	return animation.progress��animation.opts.progress��
		.done��animation.opts.done��animation.opts.complete��
		.fail��animation.opts.fail��
		.always��animation.opts.always��;
}

jQuery.Animation = jQuery.extend��Animation��{

	tweener��function��props��callback��{
		if��jQuery.isFunction��props����{
			callback = props;
			����= [��*��];
		} else {
			props = props.split��������;
		}

		var prop��
			index = 0��
			length = props.length;

		for��; index <length; index ++��{
			prop = props [index];
			tweeners [prop] = tweeners [prop] || [];
			tweeners [prop] .unshift��callback��;
		}
	}��

	prefilter��function��callback��prepend��{
		if��prepend��{
			animationPrefilters.unshift��callback��;
		} else {
			animationPrefilters.push���ص���;
		}
	}
}��;

jQuery.speed = function��speed��easing��fn��{
	var opt = speed && typeof speed ===��object����jQuery.extend��{}��speed����{
		��ɣ�fn || ��fn && easing ||
			jQuery.isFunction���ٶȣ�&&�ٶȣ�
		����ʱ�䣺�ٶȣ�
		���ͣ�fn &&����|| ����&&��jQuery.isFunction�����ͣ�&&����
	};

	opt.duration = jQuery.fx.off��0��typeof opt.duration ===��number����ѡ��
		jQuery.fx.speeds�е�opt.duration��jQuery.fx.speeds [opt.duration]��jQuery.fx.speeds._default;

	//��׼��opt.queue  -  true / undefined / null  - >��fx��
	if��opt.queue == null || opt.queue === true��{
		opt.queue =��fx��;
	}

	//�Ŷ�
	opt.old = opt.complete;

	opt.complete = function����{
		if��jQuery.isFunction��opt.old����{
			opt.old.call��this��;
		}

		if��opt.queue��{
			jQuery.dequeue��this��opt.queue��;
		}
	};

	����ѡ��;
};

1.3�У�{
	fadeTo��function��speed��to��easing��callback��{

		//����͸��������Ϊ0����ʾ�κ�����Ԫ��
		return this.filter��isHidden��.css����opacity����0��.show����

			//Ϊָ����ֵ���ö���
			.end������animate��{opacity��to}��speed��easing��callback��;
	}��
	animate��function��prop��speed��easing��callback��{
		var empty = jQuery.isEmptyObject��prop����
			optall = jQuery.speed��speed��easing��callback����
			doAnimation = function����{
				//��prop�ĸ����ϲ���������ÿ�����ԵĻ��Ͳ��ᶪʧ
				var anim = Animation��this��jQuery.extend��{}��prop����optall��;

				//��ն�������������ɽ���
				if��empty || data_priv.get��this����finish������{
					anim.stop��true��;
				}
			};
			doAnimation.finish = doAnimation;

		���ؿ�|| optall.queue === false��
			this.each��doAnimation����
			this.queue��optall.queue��doAnimation��;
	}��
	stop��function��type��clearQueue��gotoEnd��{
		var stopQueue = function��hooks��{
			var stop = hooks.stop;
			delete hooks.stop;
			ֹͣ��gotoEnd��;
		};

		if��typeof type��==��string����{
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if��clearQueue && type��== false��{
			this.queue��type ||��fx����[]��;
		}

		return this.each��function����{
			var dequeue = true��
				index = type��= null && type +��queueHooks����
				timers = jQuery.timers��
				data = data_priv.get��this��;

			if��index��{
				if��data [index] && data [index] .stop��{
					stopQueue��data [index]��;
				}
			} else {
				for�������е�������{
					if��data [index] && data [index] .stop && rrun.test��index����{
						stopQueue��data [index]��;
					}
				}
			}

			for��index = timers.length; index--;��{
				if��timers [index] .elem === this &&��type == null || timers [index] .queue === type����{
					timers [index] .anim.stop��gotoEnd��;
					dequeue = false;
					timers.splice��index��1��;
				}
			}

			//���δǿ��ִ�����һ���������������е���һ����
			//��ʱ����ǰ���������ǵ������ص�
			//�����жӣ���ǰ����������gotoEnd��
			if��dequeue ||��gotoEnd��{
				jQuery.dequeue��this��type��;
			}
		}��;
	}��
	��ɣ�function��type��{
		if��type��== false��{
			type = type || ��FX��;
		}
		return this.each��function����{
			var index��
				data = data_priv.get��this����
				queue = data [type +��queue��]��
				hooks = data [type +��queueHooks��]��
				timers = jQuery.timers��
				����=���У�queue.length��0;

			//����˽�����ݵ���ɱ�־
			data.finish = true;

			//������ն���
			jQuery.queue��this��type��[]��;

			if��hooks && hooks.stop��{
				hooks.stop.call��this��true��;
			}

			//�����κλ���������������
			for��index = timers.length; index--;��{
				if��timers [index] .elem === this && timers [index] .queue === type��{
					timers [index] .anim.stop��true��;
					timers.splice��index��1��;
				}
			}

			//���Ҿɶ����е��κζ������������
			for��index = 0; index <length; index ++��{
				if��queue [index] && queue [index] .finish��{
					queue [index] .finish.call��this��;
				}
			}

			//�ر���ɱ�־
			ɾ��data.finish;
		}��;
	}
}��;

jQuery.each��[��toggle������show������hide��]��function��i��name��{
	var cssFn = jQuery.fn [name];
	jQuery.fn [name] = function��speed��easing��callback��{
		�����ٶ�== null || typeof speed ===��boolean����
			cssFn.apply��this��arguments����
			this.animate��genFx��name��true����speed��easing��callback��;
	};
}��;

//�����Զ��嶯���Ŀ�ݷ�ʽ
jQuery.each��{
	slideDown��genFx����show������
	slideUp��genFx����hide������
	slideToggle��genFx����toggle������
	fadeIn��{opacity����show��}��
	fadeOut��{opacity����hide��}��
	fadeToggle��{opacity����toggle��}
}��function��name��props��{
	jQuery.fn [name] = function��speed��easing��callback��{
		����this.animate�����ߣ��ٶȣ����ͣ��ص���;
	};
}��;

jQuery.timers = [];
jQuery.fx.tick = function����{
	var��ʱ����
		i = 0��
		timers = jQuery.timers;

	fxNow = jQuery.now����;

	for��; i <timers.length; i ++��{
		timer = timers [i];
		//����ʱ���Ƿ���δɾ��
		if����timer����&& timers [i] === timer��{
			timers.splice��i  - ��1��;
		}
	}

	if����timers.length��{
		jQuery.fx.stop����;
	}
	fxNow = undefined;
};

jQuery.fx.timer = function��timer��{
	jQuery.timers.push��timer��;
	if��timer������{
		jQuery.fx.start����;
	} else {
		jQuery.timers.pop����;
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function����{
	if����timerId��{
		timerId = setInterval��jQuery.fx.tick��jQuery.fx.interval��;
	}
};

jQuery.fx.stop = function����{
	clearInterval��timerId��;
	timerId = null;
};

jQuery.fx.speeds = {
	����600��
	�죺200��
	//Ĭ���ٶ�
	_default��400
};


//����Clint Helfers�Ĳ����������ɡ�
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function��time��type��{
	time = jQuery.fx��jQuery.fx.speeds [time] || ʱ�䣺ʱ��;
	type = type || ��FX��;

	return this.queue��type��function��next��hooks��{
		var timeout = setTimeout��next��time��;
		hooks.stop = function����{
			clearTimeout����ʱ��;
		};
	}��;
};


��function����{
	var input = document.createElement����input������
		select = document.createElement����select������
		opt = select.appendChild��document.createElement����option������;

	input.type =����ѡ��;

	//֧�֣�iOS <= 5.1��Android <= 4.2 +
	//��ѡ���Ĭ��ֵӦΪ��on��
	support.checkOn = input.value��==����;

	//֧�֣�IE <= 11 +
	//�������selectedIndex����ѡ��Ĭ��ѡ��
	support.optSelected = opt.selected;

	//֧�֣�Android <= 2.3
	//����ѡ���ڵ�ѡ�����ر��Ϊ�ѽ���
	select.disabled = true;
	support.optDisabled =��opt.disabled;

	//֧�֣�IE <= 11 +
	//�����Ϊ������������ʧȥ��ֵ
	input = document.createElement����input����;
	input.value =��t��;
	input.type =��radio��;
	support.radioValue = input.value ===��t��;
}������;


var nodeHook��boolHook��
	attrHandle = jQuery.expr.attrHandle;

1.3�У�{
	attr��function��name��value��{
		return access��this��jQuery.attr��name��value��arguments.length> 1��;
	}��

	removeAttr��function��name��{
		return this.each��function����{
			jQuery.removeAttr��this��name��;
		}��;
	}
}��;

jQuery.extend��{
	attr��function��elem��name��value��{
		var hooks��ret��
			nType = elem.nodeType;

		//��Ҫ���ı���ע�ͺ����Խڵ��ϻ�ȡ/��������
		if����elem || nType === 3 || nType === 8 || nType === 2��{
			����;
		}

		// ����֧������ʱ���ص�prop
		if��typeof elem.getAttribute === strundefined��{
			return jQuery.prop��elem��name��value��;
		}

		//�������Զ���Сд��
		//���������һ������Ĺ���
		if��nType��== 1 ||��jQuery.isXMLDoc��elem����{
			name = name.toLowerCase����;
			hooks = jQuery.attrHooks [name] ||
				��jQuery.expr.match.bool.test��name����boolHook��nodeHook��;
		}

		if��value��== undefined��{

			if��value === null��{
				jQuery.removeAttr��elem��name��;

			} else if��hooks &&��set��in hooks &&��ret = hooks.set��elem��value��name������== undefined��{
				����;

			} else {
				elem.setAttribute��name��value +������;
				�ر�ֵ;
			}

		} else if��hooks &&��get��in hooks &&��ret = hooks.get��elem��name������== null��{
			����;

		} else {
			ret = jQuery.find.attr��elem��name��;

			//�����ڵ����Է���null�����ǹ淶��Ϊundefined
			return ret == null��
				undefined��
				RET;
		}
	}��

	removeAttr��function��elem��value��{
		var name��propName��
			i = 0��
			attrNames = value && value.match��rnotwhite��;

		if��attrNames && elem.nodeType === 1��{
			while����name = attrNames [i ++]����{
				propName = jQuery.propFix [name] || ����;

				//�������Եõ����⴦����10870��
				if��jQuery.expr.match.bool.test��name����{
					//����Ӧ����������Ϊfalse
					elem [propName] = false;
				}

				elem.removeAttribute��name��;
			}
		}
	}��

	attrHooks��{
		���ͣ�{
			set��function��elem��value��{
				if����support.radioValue && value ===��radio��&&
					jQuery.nodeName��elem����input������{
					var val = elem.value;
					elem.setAttribute����type����value��;
					if��val��{
						elem.value = val;
					}
					�ر�ֵ;
				}
			}
		}
	}
}��;

//���ڲ������ԵĹ���
boolHook = {
	set��function��elem��value��name��{
		if��value === false��{
			//����Ϊfalseʱɾ����������
			jQuery.removeAttr��elem��name��;
		} else {
			elem.setAttribute��name��name��;
		}
		��������;
	}
};
jQuery.each��jQuery.expr.match.bool.source.match��/ \ w + / g����function��i��name��{
	var getter = attrHandle [name] || jQuery.find.attr;

	attrHandle [name] = function��elem��name��isXML��{
		var ret��handle;
		if����isXML��{
			//ͨ����getter����ʱɾ���˺�������������ѭ��
			handle = attrHandle [name];
			attrHandle [name] = ret;
			ret = getter��elem��name��isXML����= null��
				name.toLowerCase������
				��ֵ;
			attrHandle [name] =���;
		}
		����;
	};
}��;




var rfocusable = / ^������input | select | textarea | button��$ / i;

1.3�У�{
	prop��function��name��value��{
		return access��this��jQuery.prop��name��value��arguments.length> 1��;
	}��

	removeProp��function��name��{
		return this.each��function����{
			ɾ�����[jQuery.propFix [name] || ���� ];
		}��;
	}
}��;

jQuery.extend��{
	propFix��{
		��for������htmlFor����
		��class������className��
	}��

	prop��function��elem��name��value��{
		var ret��hooks��notxml��
			nType = elem.nodeType;

		//��Ҫ���ı���ע�ͺ����Խڵ��ϻ�ȡ/��������
		if����elem || nType === 3 || nType === 8 || nType === 2��{
			����;
		}

		notxml = nType��== 1 || ��jQuery.isXMLDoc��elem��;

		if��notxml��{
			//�޸����Ʋ����ӹҹ�
			name = jQuery.propFix [name] || ����;
			hooks = jQuery.propHooks [name];
		}

		if��value��== undefined��{
			return hooks &&��set��in hooks &&��ret = hooks.set��elem��value��name������== undefined��
				ret��
				��elem [name] = value��;

		} else {
			return hooks &&��get��in hooks &&��ret = hooks.get��elem��name������== null��
				ret��
				elem [����];
		}
	}��

	propHooks��{
		tabIndex��{
			get��function��elem��{
				return elem.hasAttribute����tabindex����|| rfocusable.test��elem.nodeName��|| elem.href��
					elem.tabIndex��
					-1;
			}
		}
	}
}��;

if����support.optSelected��{
	jQuery.propHooks.selected = {
		get��function��elem��{
			var parent = elem.parentNode;
			if��parent && parent.parentNode��{
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each��[
	����tabIndex��
	��ֻ������
	������ȡ���
	��CELLSPACING��
	��CELLPADDING��
	���п�ȡ���
	���ϲ���Ԫ�񡱣�
	��USEMAP��
	����ܱ߿򡱣�
	��CONTENTEDITABLE��
]��function����{
	jQuery.propFix [this.toLowerCase����] = this;
}��;




var rclass = / [\ t \ r \ n \ f] / g;

1.3�У�{
	addClass��function��value��{
		var classes��elem��cur��clazz��j��finalValue��
			proceed = typeof value ===��string��&& value��
			i = 0��
			len = this.length;

		if��jQuery.isFunction��value����{
			return this.each��function��j��{
				jQuery��this��.addClass��value.call��this��j��this.className����;
			}��;
		}

		if��������{
			//����ķ�����Ϊ�˸��õ�ѹ���ԣ��μ�removeClass��
			classes =��value ||��������match��rnotwhite��|| [];

			for��; i <len; i ++��{
				elem = this [i];
				cur = elem.nodeType === 1 &&��elem.className��
					������+ elem.className +��������replace��rclass����������
					����
				��;

				if��cur��{
					j = 0;
					while����clazz = classes [j ++]����{
						if��cur.indexOf������+ clazz +������<0��{
							cur + = clazz +����;
						}
					}

					//��ָ����ͬ�Ա��ⲻ��Ҫ����Ⱦ��
					finalValue = jQuery.trim��cur��;
					if��elem.className��== finalValue��{
						elem.className = finalValue;
					}
				}
			}
		}

		�黹���;
	}��

	removeClass��function��value��{
		var classes��elem��cur��clazz��j��finalValue��
			proceed = arguments.length === 0 || typeof value ===��string��&& value��
			i = 0��
			len = this.length;

		if��jQuery.isFunction��value����{
			return this.each��function��j��{
				jQuery��this��.removeClass��value.call��this��j��this.className����;
			}��;
		}
		if��������{
			classes =��value ||��������match��rnotwhite��|| [];

			for��; i <len; i ++��{
				elem = this [i];
				//�˱��ʽ�������ѹ���ԣ������addClass��
				cur = elem.nodeType === 1 &&��elem.className��
					������+ elem.className +��������replace��rclass����������
					����
				��;

				if��cur��{
					j = 0;
					while����clazz = classes [j ++]����{
						//ɾ��* all *ʵ��
						while��cur.indexOf������+ clazz +������> = 0��{
							cur = cur.replace������+ clazz +������������;
						}
					}

					//��ָ����ͬ�Ա��ⲻ��Ҫ����Ⱦ��
					finalValue =ֵ��jQuery.trim��cur��������;
					if��elem.className��== finalValue��{
						elem.className = finalValue;
					}
				}
			}
		}

		�黹���;
	}��

	toggleClass��function��value��stateVal��{
		var type = typeof value;

		if��typeof stateVal ===��boolean��&& type ===��string����{
			return stateVal��this.addClass��value����this.removeClass��value��;
		}

		if��jQuery.isFunction��value����{
			return this.each��function��i��{
				jQuery��this��.toggleClass��value.call��this��i��this.className��stateVal����stateVal��;
			}��;
		}

		return this.each��function����{
			if��type ===��string����{
				//�л���������
				var className��
					i = 0��
					self = jQuery��this����
					classNames = value.match��rnotwhite��|| [];

				while����className = classNames [i ++]����{
					//��������ÿ��className���ո�ָ��б�
					if��self.hasClass��className����{
						self.removeClass��className��;
					} else {
						self.addClass��className��;
					}
				}

			//�л������༶����
			} else if��type === strundefined || type ===��boolean����{
				if��this.className��{
					//������ã���洢className
					data_priv.set��this����__ className__����this.className��;
				}

				//���Ԫ����һ���������������Ǵ�����`false`��
				//Ȼ��ɾ����������������еĻ������汣����������
				//���������ǰ������Ķ���������еĻ�����
				//���û�д洢������˵����ַ�����
				this.className = this.className || ֵ===�٣�������data_priv.get��this����__ className__����|| ����;
			}
		}��;
	}��

	hasClass��function��selector��{
		var className =����+ selector +������
			i = 0��
			l = this.length;
		for��; i <l; i ++��{
			if��this [i] .nodeType === 1 &&������+ this [i] .className +��������replace��rclass����������indexOf��className��> = 0��{
				����true;
			}
		}

		�������;
	}
}��;




var rreturn = / \ r / g;

1.3�У�{
	val��function��value��{
		var hooks��ret��isFunction��
			elem = this [0];

		if����arguments.length��{
			if��elem��{
				hooks = jQuery.valHooks [elem.type] || jQuery.valHooks [elem.nodeName.toLowerCase����];

				if��hooks &&��get��in hooks &&��ret = hooks.get��elem����value��������== undefined��{
					����;
				}

				ret = elem.value;

				return typeof ret ===��string����
					//����������ַ�������
					ret.replace��rreturn����������
					//����valueΪnull / undef��number�����
					ret == null��������ret;
			}

			����;
		}

		isFunction = jQuery.isFunction��value��;

		return this.each��function��i��{
			var val;

			if��this.nodeType��== 1��{
				����;
			}

			if��isFunction��{
				val = value.call��this��i��jQuery��this��.val������;
			} else {
				val =ֵ;
			}

			//��null / undefined��Ϊ����; ������ת��Ϊ�ַ���
			if��val == null��{
				val =����;

			} else if��typeof val ===��number����{
				val + =����;

			} else if��jQuery.isArray��val����{
				val = jQuery.map��val��function��value��{
					����ֵ== null��������ֵ+����;
				}��;
			}

			hooks = jQuery.valHooks [this.type] || jQuery.valHooks [this.nodeName.toLowerCase����];

			//���set����undefined������˵���������
			if����hooks ||�����ҹ��еġ�set����|| hooks.set��this��val����value����=== undefined��{
				this.value = val;
			}
		}��;
	}
}��;

jQuery.extend��{
	valHooks��{
		ѡ� {
			get��function��elem��{
				var val = jQuery.find.attr��elem����value����;
				return val��= null��
					val��
					//֧�֣�IE10-11 +
					// option.text�׳��쳣����14686����14858��
					jQuery.trim��jQuery.text��elem����;
			}
		}��
		ѡ�� {
			get��function��elem��{
				varֵ��ѡ�
					options = elem.options��
					index = elem.selectedIndex��
					one = elem.type ===��select-one��|| ָ��<0��
					ֵ=һ����ֵ �� []��
					���=һ��index + 1��options.length��
					i =ָ��<0��
						���ֵ��
						һ����ָ����0;

				//��������ѡ����ѡ��
				for��; i <max; i ++��{
					option = options [i];

					//�����ú�IE6-9δ���£���2551��
					if����option.selected || i === index��&&
							//�������ѽ��õ�ѡ�����õ�optgroup�е�ѡ��
							��support.optDisabled����option.disabled��option.getAttribute����disabled����=== null��&&
							����option.parentNode.disabled ||��jQuery.nodeName��option.parentNode����optgroup��������{

						//��ȡѡ����ض�ֵ
						value = jQuery��option��.val����;

						//���ǲ���Ҫһ��ѡ�������
						���һ�� �� {
							�ر�ֵ;
						}

						// Multi-Selects����һ������
						values.push��value��;
					}
				}

				�ر�ֵ;
			}��

			set��function��elem��value��{
				var optionSet��option��
					options = elem.options��
					values = jQuery.makeArray��value����
					i = options.length;

				���� -  �� {
					option = options [i];
					if����option.selected = jQuery.inArray��option.value��values��> = 0����{
						optionSet = true;
					}
				}

				//ǿ������������÷�ƥ��ֵʱ����һ��
				if����optionSet��{
					elem.selectedIndex = -1;
				}
				�ر�ֵ;
			}
		}
	}
}��;

//���ߵ�͸�ѡ��getter / setter
jQuery.each��[��radio������checkbox��]��function����{
	jQuery.valHooks [this] = {
		set��function��elem��value��{
			if��jQuery.isArray��value����{
				return��elem.checked = jQuery.inArray��jQuery��elem��.val������value��> = 0��;
			}
		}
	};
	if����support.checkOn��{
		jQuery.valHooks [this] .get = function��elem��{
			return elem.getAttribute����value����=== null����on����elem.value;
		};
	}
}��;




//����jQuery�Խ���������


jQuery.each������blur focus focusin focusout load resize scroll unload click dblclick��+
	��mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave��+
	������select select keydown keypress keyup error contextmenu������split����������function��i��name��{

	//�����¼���
	jQuery.fn [name] = function��data��fn��{
		return arguments.length> 0��
			this.on��name��null��data��fn����
			this.trigger�����֣�;
	};
}��;

1.3�У�{
	hover��function��fnOver��fnOut��{
		return this.mouseenter��fnOver��.mouseleave��fnOut || fnOver��;
	}��

	bind��function��types��data��fn��{
		return this.on��types��null��data��fn��;
	}��
	unbind��function��types��fn��{
		return this.off��types��null��fn��;
	}��

	delegate��function��selector��types��data��fn��{
		return this.on��types��selector��data��fn��;
	}��
	undelegate��function��selector��types��fn��{
		//�����ƿռ䣩��selector��types [��fn]��
		return arguments.length === 1��this.off��selector����**������this.off��types��selector ||��**����fn��;
	}
}��;


var nonce = jQuery.now����;

var rquery =��/ \��/��;



//֧�֣�Android 2.3
//��������޷����ַ���ת��������
jQuery.parseJSON = function��data��{
	return JSON.parse��data +������;
};


//�������xml����
jQuery.parseXML = function��data��{
	var xml��tmp;
	if����data || typeof data��==��string����{
		return null;
	}

	//֧�֣�IE9
	����{
		tmp = new DOMParser����;
		xml = tmp.parseFromString��data����text / xml����;
	} catch��e��{
		xml =δ����;
	}

	if����xml || xml.getElementsByTagName����parsererror������length��{
		jQuery.error������Ч��XML����+���ݣ�;
	}
	return xml;
};


VAR
	rhash = /#.*$/,
	rts = /��[����]��_ = [^��] * /��
	rheaders = / ^����*������[\ t] *��[^ \ r \ n] *��$ / mg��
	//��7653����8125����8152������Э����
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res | widget����$ /��
	rnoContent = / ^������GET | HEAD��$ /��
	rprotocol = / ^ \ / \ //��
	rurl = / ^��[\ w��+  - ] + :)������\ / \ /������[^ \ /����] * @ |����[^ \ /������] *�������� ����\ d +��|��|��/��

	/ *Ԥ������
	 * 1�����Ƕ��������Զ����������ͺ����ã��й�ʾ���������ajax / jsonp.js��
	 * 2����Щ����Ϊ��
	 *  - ��Ҫ������֮ǰ
	 *  - �������л������s.processDataΪtrue����s.dataΪ�ַ�����
	 * 3��key��dataType
	 * 4������ʹ��catchall���š�*��
	 * 5��ִ�н���transport dataType��ʼ�������Ҫ�������ִ�С�*��
	 * /
	prefilters = {}��

	/ *�����
	 * 1��key��dataType
	 * 2������ʹ��catchall���š�*��
	 * 3��ѡ����transport dataType��ʼ��Ȼ�������Ҫ��ת����*��
	 * /
	transports = {}��

	//����ʹ��comment-prolog char���У���10098��; ���밲�����޲�����ѹ��
	allTypes =��* /����concat����*������

	//�ĵ�λ��
	ajaxLocation = window.location.href��

	//��λ�û���Ϊ�������
	ajaxLocParts = rurl.exec��ajaxLocation.toLowerCase������|| [];

//����jQuery.ajaxPrefilter��jQuery.ajaxTransport�Ļ��������캯����
function addToPrefiltersOrTransports��structure��{

	// dataTypeExpression�ǿ�ѡ�ģ�Ĭ��Ϊ��*��
	return������dataTypeExpression��func��{

		if��typeof dataTypeExpression��==��string����{
			func = dataTypeExpression;
			dataTypeExpression =��*��;
		}

		var dataType��
			i = 0��
			dataTypes = dataTypeExpression.toLowerCase������match��rnotwhite��|| [];

		if��jQuery.isFunction��func����{
			//����dataTypeExpression�е�ÿ��dataType
			while����dataType = dataTypes [i ++]����{
				//�������ǰ��
				if��dataType [0] ===��+����{
					dataType = dataType.slice��1��|| ��*��;
					��structure [dataType] = structure [dataType] || []����unshift��func��;

				//����׷��
				} else {
					��structure [dataType] = structure [dataType] || []����push��func��;
				}
			}
		}
	};
}

//Ԥ����������Ļ�����鹦��
function inspectPrefiltersOrTransports��structure��options��originalOptions��jqXHR��{

	var���= {}��
		seekingTransport =���ṹ===���䣩;

	function inspect��dataType��{
		varѡ��;
		���[dataType] = true;
		jQuery.each��structure [dataType] || []��function��_��prefilterOrFactory��{
			var dataTypeOrTransport = prefilterOrFactory��options��originalOptions��jqXHR��;
			if��typeof dataTypeOrTransport ===��string��&&��seekingTransport &&��inspectpected [dataTypeOrTransport]��{
				options.dataTypes.unshift��dataTypeOrTransport��;
				inspect��dataTypeOrTransport��;
				�������;
			} else if��seekingTransport��{
				return����selected = dataTypeOrTransport��;
			}
		}��;
		����ѡ��;
	}

	return inspect��options.dataTypes [0]��|| �����[��*��] && inspect����*����;
}

// ajaxѡ���������չ
//��ȡ��ƽ̹��ѡ���Ҫ�����չ��
//�޸���9887
function ajaxExtend��target��src��{
	var key��deep��
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for��key in src��{
		if��src [key]��== undefined��{
			��flatOptions [key]��target :( deep ||��deep = {}������[key] = src [key];
		}
	}
	if��deep��{
		jQuery.extend��true��target��deep��;
	}

	�ع�Ŀ��;
}

/ *�����ajax�������Ӧ��
 *  - �ҵ���ȷ��dataType�����������ͺ�Ԥ�ڵ�dataType֮����е��⣩
 *  - ������Ӧ����Ӧ
 * /
function ajaxHandleResponses��s��jqXHR��responses��{

	var ct��type��finalDataType��firstDataType��
		contents = s.contents��
		dataTypes = s.dataTypes;

	//ɾ��auto dataType���������л�ȡ��������
	while��dataTypes [0] ===��*����{
		dataTypes.shift����;
		if��ct === undefined��{
			ct = s.mimeType || jqXHR.getResponseHeader�� ���������͡���;
		}
	}

	//��������Ƿ����ڴ�����֪����������
	if��ct��{
		for���������ݣ�{
			if��contents [type] && contents [type] .test��ct����{
				dataTypes.unshift��type��;
				����;
			}
		}
	}

	//��������Ƿ��Ԥ�ڵ�dataType����Ӧ
	if����Ӧ�е�dataTypes [0]��{
		finalDataType = dataTypes [0];
	} else {
		//����convertible dataTypes
		for������ظ���{
			if����dataTypes [0] || s.converters [type +����+ dataTypes [0]]��{
				finalDataType = type;
				����;
			}
			if����firstDataType��{
				firstDataType = type;
			}
		}
		//����ֻ��ʹ�õ�һ��
		finalDataType = finalDataType || firstDataType;
	}

	//��������ҵ���dataType
	//�����Ҫ�����ǽ�dataType��ӵ��б���
	//��������Ӧ����Ӧ
	if��finalDataType��{
		if��finalDataType��== dataTypes [0]��{
			dataTypes.unshift��finalDataType��;
		}
		������Ӧ[finalDataType];
	}
}

/ *���������ԭʼ��Ӧ����ת��
 *������jqXHRʵ���ϵ�responseXXX�ֶ�
 * /
function ajaxConvert��s��response��jqXHR��isSuccess��{
	var conv2��current��conv��tmp��prev��
		converters = {}��
		//ʹ��dataTypes�ĸ������Է�������Ҫ�޸����Խ���ת��
		dataTypes = s.dataTypes.slice����;

	//ʹ��Сд������ת����ӳ��
	if��dataTypes [1]��{
		for��conv in s.converters��{
			converter [conv.toLowerCase����] = s.converters [conv];
		}
	}

	current = dataTypes.shift����;

	//ת��Ϊÿ��˳����������
	������ǰ��{

		if��s.responseFields [current]��{
			jqXHR [s.responseFields [current]] =��Ӧ;
		}

		//����ṩ����Ӧ��dataFilter
		if����prev && isSuccess && s.dataFilter��{
			response = s.dataFilter��response��s.dataType��;
		}

		prev =��ǰ;
		current = dataTypes.shift����;

		if��current��{

		//�����ǰ��dataType�Ƿ��Զ��ģ���ôֻ�й���Ҫ��
			if��current ===��*����{

				current = prev;

			//���prev dataTypeΪ��auto���뵱ǰ��ͬ����ת����Ӧ
			} else if��prev��==��*��&& prev��== current��{

				//Ѱ��ֱ��ת����
				conv = converter [prev +����+ current] || ת����[��*��+��ǰ];

				//���û���ҵ�����Ѱ��һ��
				if����conv��{
					for��ת�����е�conv2��{

						//���conv2�������
						tmp = conv2.split��������;
						if��tmp [1] === current��{

							//���prev����ת��Ϊ�ѽ��ܵ�����
							conv = converter [prev +����+ tmp [0]] ||
								converter [��*��+ tmp [0]];
							if��conv��{
								//ѹ���ȼ�ת����
								if��conv === true��{
									conv = converters [conv2];

								//���򣬲����м���������
								} else if��converters [conv2]��== true��{
									current = tmp [0];
									dataTypes.unshift��tmp [1]��;
								}
								����;
							}
						}
					}
				}

				//Ӧ��ת������������ǵȼۣ�
				if��conv��== true��{

					//�����������ð�ݣ����򲶻񲢷�������
					if��conv && s [��throws��]��{
						response = conv����Ӧ��;
					} else {
						����{
							response = conv����Ӧ��;
						} catch��e��{
							return {state����parsererror��������ת����e����û�дӡ�+ prev +��ת��Ϊ��+ current};
						}
					}
				}
			}
		}
	}

	return {state����success����data��response};
}

jQuery.extend��{

	//���ڱ�����ѯ���ļ�����
	��Ծ��0��

	//�´������Last-Modified��ͷ����
	����޸ģ� {}��
	etag��{}��

	ajaxSettings��{
		url��ajaxLocation��
		���ͣ���GET����
		isLocal��rlocalProtocol.test��ajaxLocParts [1]����
		ȫ����ģ�
		processData��true��
		async��true��
		contentType����application / x-www-form-urlencoded; charset = UTF-8����
		/ *
		��ʱ��0��
		���ݣ�null��
		dataType��null��
		�û�����null��
		���룺null��
		cache��null��
		�׳����٣�
		��ͳ�ģ��ٵģ�
		���⣺{}��
		* /

		���ܣ�{
			��*���� �������ͣ�
			���֣���text / plain����
			html����text / html����
			xml����application / xml��text / xml����
			json����application / json��text / javascript��
		}��

		���ݣ�{
			xml��/ xml /��
			html��/ html /��
			json��/ json /
		}��

		responseFields��{
			xml����responseXML����
			text����responseText����
			json����responseJSON��
		}��

		//����ת����
		//ʹ�õ����ո���ָ�Դ����catchall��*������Ŀ������
		ת������{

			//���κ�����ת��Ϊ�ı�
			��* text�����ַ�����

			//�ı���html��true =û��ת����
			��text html�����ǵģ�

			//���ı�����Ϊjson���ʽ
			��text json����jQuery.parseJSON��

			//���ı�����Ϊxml
			��text xml����jQuery.parseXML
		}��

		//���ڲ�Ӧ�����չ��ѡ�
		//������������������Լ����Զ���ѡ��
		//���㴴��һ����Ӧ�õ�
		//�����չ���μ�ajaxExtend��
		flatOptions��{
			url���ǵģ�
			�����ģ��ǵ�
		}
	}��

	//�������ĳ������ö��󴴽���Ŀ����
	//ͬʱ����ajaxSettings�������ֶΡ�
	//���ʡ��target����д��ajaxSettings��
	ajaxSetup��function��target��settings��{
		�������ã�

			//�������ö���
			ajaxExtend��ajaxExtend��target��jQuery.ajaxSettings�������ã���

			//��չajaxSettings
			ajaxExtend��jQuery.ajaxSettings��target��;
	}��

	ajaxPrefilter��addToPrefiltersOrTransports��prefilters����
	ajaxTransport��addToPrefiltersOrTransports��transports����

	//��Ҫ����
	ajax��function��url��options��{

		//���url��һ��������ģ��1.5֮ǰ��ǩ��
		if��typeof url ===��object����{
			options = url;
			url = undefined;
		}

		//ǿ��ѡ���Ϊ����
		options = options || {};

		var���䣬
			//û�з����������URL
			cacheURL��
			//��Ӧ��ͷ
			responseHeadersString��
			responseHeaders��Ӧ��
			//��ʱ���
			timeoutTimer��
			//���������
			���֣�
			//֪���Ƿ�Ҫ����ȫ���¼�
			fireGlobals��
			//ѭ������
			һ����
			//��������ѡ�����
			s = jQuery.ajaxSetup��{}��options����
			//�ص�������
			callbackContext = s.context || S��
			//ȫ���¼�����������callbackContext���������DOM�ڵ��jQuery����
			globalEventContext = s.context &&��callbackContext.nodeType || callbackContext.jquery����
				jQuery��callbackContext����
				jQuery.event��
			//����
			deferred = jQuery.Deferred������
			completeDeferred = jQuery.Callbacks����һ���ڴ桱����
			//������״̬�Ļص�
			statusCode = s.statusCode || {}��
			//���⣨����һ���Է��ͣ�
			requestHeaders = {}��
			requestHeadersNames = {}��
			// jqXHR״̬
			state = 0��
			//Ĭ����ֹ��Ϣ
			strAbort =����ȡ������
			//��xhr
			jqXHR = {
				readyState��0��

				//�����Ҫ������ͷ��ϣ��
				getResponseHeader��function��key��{
					varƥ��;
					if��state === 2��{
						if����responseHeaders��{
							responseHeaders = {};
							while����match = rheaders.exec��responseHeadersString������{
								responseHeaders [match [1] .toLowerCase����] = match [2];
							}
						}
						match = responseHeaders [key.toLowerCase����];
					}
					return match == null��null��ƥ��;
				}��

				//ԭʼ�ַ���
				getAllResponseHeaders��function����{
					����״̬=== 2��responseHeadersString��null;
				}��

				//�������
				setRequestHeader��function��name��value��{
					var lname = name.toLowerCase����;
					if����state��{
						name = requestHeadersNames [lname] = requestHeadersNames [lname] || ����;
						requestHeaders [name] = value;
					}
					�黹���;
				}��

				//������Ӧ�������ͱ�ͷ
				overrideMimeType��function��type��{
					if����state��{
						s.mimeType = type;
					}
					�黹���;
				}��

				//������״̬�Ļص�
				statusCode��function��map��{
					var����;
					if��map��{
						if��state <2��{
							for����ͼ�еĴ��룩{
								//�Ա����ɻص��ķ�ʽ�ӳ�����»ص�
								statusCode [code] = [statusCode [code]��map [code]];
							}
						} else {
							//ִ���ʵ��Ļص�
							jqXHR.always��map [jqXHR.status]��;
						}
					}
					�黹���;
				}��

				//ȡ������
				abort��function��statusText��{
					var finalText = statusText || strAbort;
					if��transport��{
						transport.abort��finalText��;
					}
					��ɣ�0��finalText��;
					�黹���;
				}
			};

		//�����ӳ�
		deferred.promise��jqXHR��.complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		//ɾ����ϣ�ַ�����7531�����ַ���������
		//���û���ṩЭ�飨Ԥ���������ܻ���������
		//�������ö����е����URL����10093�����ǩ����һ���ԣ�
		//���ǻ�ʹ��url������������ã�
		s.url =����url || s.url || ajaxLocation��+������.replace��rhash��������
			.replace��rprotocol��ajaxLocParts [1] +��//����;

		//����Ʊ֤��12004����ı�������ѡ��
		s.type = options.method || options.type || s.method || s.type;

		//��ȡdataTypes�б�
		s.dataTypes = jQuery.trim��s.dataType ||��*������toLowerCase������match��rnotwhite��|| [����];

		//��������һ��Э��ʱ����������������ģ�host��port mismatch
		if��s.crossDomain == null��{
			parts = rurl.exec��s.url.toLowerCase������;
			s.crossDomain = !!��parts &&
				������[1]��== ajaxLocParts [1] ||����[2]��== ajaxLocParts [2] ||
					������[3] ||������[1] ===��http����������80������443��������==
						��ajaxLocParts [3] ||��ajaxLocParts [1] ===��http��������80������443��������
			��;
		}

		//ת�����ݣ�����������ַ�����
		if��s.data && s.processData && typeof s.data��==��string����{
			s.data = jQuery.param��s.data��s.traditional��;
		}

		//Ӧ��ǰ�ù�����
		inspectPrefiltersOrTransports��prefilters��s��options��jqXHR��;

		//���������Ԥ����������ֹ����ͣ������
		if��state === 2��{
			����jqXHR;
		}

		//�����Ҫ���������ڿ��Է���ȫ���¼�
		//�����AMDʹ�ó�����δ����jQuery.event���벻Ҫ�����¼�����15118��
		fireGlobals = jQuery.event && s.global;

		//�۲�һ��������
		if��fireGlobals && jQuery.active ++ === 0��{
			jQuery.event.trigger�� ��ajaxStart����;
		}

		//��д����
		s.type = s.type.toUpperCase����;

		//ȷ�������Ƿ��������
		s.hasContent =��rnoContent.test��s.type��;

		//����URL���Է�����ʹ��If-Modified-Since���в���
		//��/��If-None-Match�����Ժ�
		cacheURL = s.url;

		//����ѡ���û�����ݵ�����
		if����s.hasContent��{

			//������ݿ��ã��뽫���ݸ��ӵ�url
			if��s.data��{
				cacheURL =��s.url + =��rquery.test��cacheURL��������������������+ s.data��;
				//��9682��ɾ�����ݣ��Ա�����������ʱ��ʹ����
				ɾ��s.data;
			}

			//�����Ҫ����URL����ӷ�����
			if��s.cache === false��{
				s.url = rts.test��cacheURL����

					//�������'_'��������������ֵ
					cacheURL.replace��rts����$ 1_ =��+ nonce ++����

					//�������һ�������
					cacheURL +��rquery.test��cacheURL��������������������+��_ =��+ nonce ++;
			}
		}

		//�������ifModifiedģʽ��������If-Modified-Since��/��If-None-Match��ͷ��
		if��s.ifModified��{
			if��jQuery.lastModified [cacheURL]��{
				jqXHR.setRequestHeader����If-Modified-Since����jQuery.lastModified [cacheURL]��;
			}
			if��jQuery.etag [cacheURL]��{
				jqXHR.setRequestHeader����If-None-Match����jQuery.etag [cacheURL]��;
			}
		}

		//������ڷ������ݣ���������ȷ�ı�ͷ
		if��s.data && s.hasContent && s.contentType��== false || options.contentType��{
			jqXHR.setRequestHeader����Content-Type����s.contentType��;
		}

		//����dataType���÷�������Accepts��ͷ
		jqXHR.setRequestHeader��
			�����ܡ���
			s.dataTypes [0] && s.accepts [s.dataTypes [0]]��
				s.accepts [s.dataTypes [0]] +��s.dataTypes [0]��==��*����������+ allTypes +��; q = 0.01������������
				s.accepts [��*��]
		��;

		//������ѡ��
		for��i in s.headers��{
			jqXHR.setRequestHeader��i��s.headers [i]��;
		}

		//�����Զ����ͷ/ mimetypes����ǰ��ֹ
		if��s.beforeSend &&��s.beforeSend.call��callbackContext��jqXHR��s��=== false || state === 2����{
			//���û���������ֹ������
			return jqXHR.abort����;
		}

		//��ֹ������ȡ��
		strAbort =��abort��;

		//���ӳ��ϰ�װ�ص�
		for��i in {success��1��error��1��complete��1}��{
			jqXHR [i]��s [i]��;
		}

		//��ȡ����
		transport = inspectPrefiltersOrTransports��transports��s��options��jqXHR��;

		//���û�����䣬�����Զ���ֹ
		if����transport��{
			��ɣ�-1���������䡱��;
		} else {
			jqXHR.readyState = 1;

			//����ȫ���¼�
			if��fireGlobals��{
				globalEventContext.trigger����ajaxSend����[jqXHR��s]��;
			}
			// ��ʱ
			if��s.async && s.timeout> 0��{
				timeoutTimer = setTimeout��function����{
					jqXHR.abort�� ����ʱ����;
				}��s.timeout��;
			}

			����{
				state = 1;
				transport.send��requestHeaders��done��;
			} catch��e��{
				//���û����ɣ����쳣����Ϊ����
				if��state <2��{
					��ɣ�-1��e��;
				//�򵥵������׳�
				} else {
					�ӵ�;
				}
			}
		}

		//������в�����ص�
		������ɣ�״̬��nativeStatusText����Ӧ�����⣩{
			var isSuccess���ɹ���������Ӧ���޸ģ�
				statusText = nativeStatusText;

			//��һ��
			if��state === 2��{
				����;
			}

			//״̬�����ѡ���ɡ�
			state = 2;

			//��������������ʱ
			if��timeoutTimer��{
				clearTimeout��timeoutTimer��;
			}

			//�������������ռ��Ľ�����ô���
			//������jqXHR����ʹ�ö೤ʱ�䣩
			transport = undefined;

			//������Ӧͷ
			responseHeadersString = headers || ����;

			//����readyState
			jqXHR.readyState = status> 0��4��0;

			//ȷ���Ƿ�ɹ�
			isSuccess = status> = 200 && status <300 || ״̬=== 304;

			//��ȡ��Ӧ����
			if���ظ���{
				response = ajaxHandleResponses��s��jqXHR��response��;
			}

			//ת������ʲô����������responseXXX�ֶΣ�
			response = ajaxConvert��s��response��jqXHR��isSuccess��;

			//����ɹ����봦��������
			if��isSuccess��{

				//�������ifModifiedģʽ��������If-Modified-Since��/��If-None-Match��ͷ��
				if��s.ifModified��{
					modified = jqXHR.getResponseHeader����Last-Modified����;
					if��modified��{
						jQuery.lastModified [cacheURL] = modified;
					}
					modified = jqXHR.getResponseHeader����etag����;
					if��modified��{
						jQuery.etag [cacheURL] =���޸�;
					}
				}

				//���û������
				if��status === 204 || s.type ===��HEAD����{
					statusText =��nocontent��;

				//���û���޸�
				} else if��status === 304��{
					statusText =��notmodified��;

				//������������ݣ�������ת����
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess =��error;
				}
			} else {
				//��statusText����ȡ������Է���ֹ���й淶��
				error = statusText;
				if��status ||��statusText��{
					statusText =������;
					if��status <0��{
						status = 0;
					}
				}
			}

			//���ü�xhr���������
			jqXHR.status = status;
			jqXHR.statusText =��nativeStatusText || statusText��+����;

			//�ɹ�/����
			if��isSuccess��{
				deferred.resolveWith��callbackContext��[success��statusText��jqXHR]��;
			} else {
				deferred.rejectWith��callbackContext��[jqXHR��statusText��error]��;
			}

			//������״̬�Ļص�
			jqXHR.statusCode��statusCode��;
			statusCode = undefined;

			if��fireGlobals��{
				globalEventContext.trigger��isSuccess����ajaxSuccess������ajaxError����
					[jqXHR��s���ǳɹ��𣿳ɹ�������]��;
			}

			//���
			completeDeferred.fireWith��callbackContext��[jqXHR��statusText]��;

			if��fireGlobals��{
				globalEventContext.trigger����ajaxComplete����[jqXHR��s]��;
				//����ȫ��AJAX������
				if������ -  jQuery.active����{
					jQuery.event.trigger�� ��ajaxStop����;
				}
			}
		}

		����jqXHR;
	}��

	getJSON��function��url��data��callback��{
		return jQuery.get��url��data��callback����json����;
	}��

	getScript��function��url��callback��{
		return jQuery.get��url��undefined��callback����script����;
	}
}��;

jQuery.each��[��get������post��]��function��i��method��{
	jQuery [method] = function��url��data��callback��type��{
		//���ʡ��data����������λ����
		if��jQuery.isFunction��data����{
			type = type || �����;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax��{
			��ַ����ַ
			���ͣ�������
			dataType��type��
			���ݣ����ݣ�
			�ɹ����ص�
		}��;
	};
}��;


jQuery._evalUrl = function��url��{
	return jQuery.ajax��{
		��ַ����ַ
		���ͣ���GET����
		dataType����script����
		async��false��
		ȫ�򣺼٣�
		���׳������ǵ�
	}��;
};


1.3�У�{
	wrapAll��function��html��{
		var wrap;

		if��jQuery.isFunction��html����{
			return this.each��function��i��{
				jQuery��this��.wrapAll��html.call��this��i����;
			}��;
		}

		if��this [0]��{

			//��ΧĿ���Ԫ��
			wrap = jQuery��html��this [0] .ownerDocument��.eq��0��.clone��true��;

			if��this [0] .parentNode��{
				wrap.insertBefore��this [0]��;
			}

			wrap.map��function����{
				var elem = this;

				while��elem.firstElementChild��{
					elem = elem.firstElementChild;
				}

				����Ԫ��;
			}����append��this��;
		}

		�黹���;
	}��

	wrapInner��function��html��{
		if��jQuery.isFunction��html����{
			return this.each��function��i��{
				jQuery��this��.wrapInner��html.call��this��i����;
			}��;
		}

		return this.each��function����{
			var self = jQuery��this����
				contents = self.contents����;

			if��contents.length��{
				contents.wrapAll��html��;

			} else {
				self.append��html��;
			}
		}��;
	}��

	wrap��function��html��{
		var isFunction = jQuery.isFunction��html��;

		return this.each��function��i��{
			jQuery��this��.wrapAll��isFunction��html.call��this��i����html��;
		}��;
	}��

	unwrap��function����{
		����this.parent������each��function����{
			if����jQuery.nodeName��this����body������{
				jQuery��this��.replaceWith��this.childNodes��;
			}
		}������������;
	}
}��;


jQuery.expr.filters.hidden = function��elem��{
	//֧�֣�Opera <= 12.12
	// Opera��ĳЩԪ���ϱ���offsetWidths��offsetHeightsС����
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function��elem��{
	return��jQuery.expr.filters.hidden��elem��;
};




var r20 = /��20 / g��
	rbracket = / \ [\] $ /��
	rCRLF = / \ r��\ n / g��
	rsubmitterTypes = / ^������submit | button | image | reset | file��$ / i��
	rsubmittable = / ^������input | select | textarea | keygen��/ i;

function buildParams��prefix��obj��traditional��add��{
	var name;

	if��jQuery.isArray��obj����{
		//���л������
		jQuery.each��obj��function��i��v��{
			if��traditional || rbracket.test��prefix����{
				//��ÿ����������Ϊ������
				add��prefix��v��;

			} else {
				// Item�ǷǱ������������󣩣�����������������
				buildParams��ǰ׺+��[��+��typeof v ===��object����i��������+��]����v��traditional��add��;
			}
		}��;

	} else if����traditional && jQuery.type��obj��===��object����{
		//���л������
		for��obj�е����֣�{
			buildParams��ǰ׺+��[��+ name +��]����obj [name]�����壬��ӣ�;
		}

	} else {
		//���л������
		add��prefix��obj��;
	}
}

//���л�һ����Ԫ�������һ���Ԫ��
//��/ֵ����ѯ�ַ�����
jQuery.param = function��a��traditional��{
	varǰ׺��
		s = []��
		add = function��key��value��{
			//���value��һ�����������������������ֵ
			value = jQuery.isFunction��value����value����:( value == null��������value��;
			s [s.length] = encodeURIComponent��key��+��=��+ encodeURIComponent��value��;
		};

	//��jQuery <= 1.3.2��Ϊ�Ĵ�ͳ����Ϊtrue��
	if����ͳ=== undefined��{
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	//���������һ�����飬��ٶ�����һ����Ԫ�����顣
	if��jQuery.isArray��a��||��a.jquery &&��jQuery.isPlainObject��a������{
		//���л���Ԫ��
		jQuery.each��a��function����{
			add��this.name��this.value��;
		}��;

	} else {
		//����Ǵ�ͳ��ʽ������롰�ɡ���ʽ��1.3.2����ɵķ�ʽ��
		//������������ݹ����params��
		for��a�е�ǰ׺��{
			buildParams��ǰ׺��[ǰ׺]�����壬��ӣ�;
		}
	}

	//���ؽ�����л�
	return s.join����������.replace��r20����+����;
};

1.3�У�{
	serialize��function����{
		return jQuery.param��this.serializeArray������;
	}��
	serializeArray��function����{
		return this.map��function����{
			//����Ϊ��Ԫ�ء����propHook�����˻���ӱ�Ԫ��
			var elements = jQuery.prop��this����elements����;
			����Ԫ�أ�jQuery.makeArray��elements����this;
		}��
		.filter��function����{
			var type = this.type;

			//ʹ��.is������disabled������ʹfieldset [disabled]������
			return this.name &&��jQuery��this��.is������disabled����&&
				rsubmittable.test��this.nodeName��&&��rsubmitterTypes.test��type��&&
				��this.checked ||��rcheckableType.test��type����;
		}��
		.map��function��i��elem��{
			var val = jQuery��this��.val����;

			return val == null��
				��ֵ ��
				jQuery.isArray��val����
					jQuery.map��val��function��val��{
						return {name��elem.name��value��val.replace��rCRLF����\ r \ n����};
					}����
					{name��elem.name��value��val.replace��rCRLF����\ r \ n����};
		}�����õ�����;
	}
}��;


jQuery.ajaxSettings.xhr = function����{
	����{
		�����µ�XMLHttpRequest����;
	} catch��e��{}
};

var xhrId = 0��
	xhrCallbacks = {}��
	xhrSuccessStatus = {
		//�ļ�Э�����ǲ���״̬��0������Ϊ200
		0��200��
		//֧�֣�IE9
		//��1450����ʱIE����1223��Ӧ����204
		1223��204
	}��
	xhrSupported = jQuery.ajaxSettings.xhr����;

//֧�֣�IE9
//ж��ʱ�����ֶ���ֹ�����󣨣�5280��
//�й���ϸ��Ϣ�������https://support.microsoft.com/kb/2856746
if��window.attachEvent��{
	window.attachEvent����onunload����function����{
		for��xhrCallbacks�е�var����{
			xhrCallbacks [key]����;
		}
	}��;
}

support.cors = !! xhrSupported &&��xhrSupported�еġ�withCredentials����;
support.ajax = xhrSupported = !! xhrSupported;

jQuery.ajaxTransport��function��options��{
	var�ص�;

	//ֻ����ͨ��XMLHttpRequest֧��ʱ���������
	if��support.cors || xhrSupported &&��options.crossDomain��{
		����{
			send��function��headers��complete��{
				var i��
					xhr = options.xhr������
					id = ++ xhrId;

				xhr.open��options.type��options.url��options.async��options.username��options.password��;

				//����ṩ����Ӧ���Զ����ֶ�
				if��options.xhrFields��{
					for��i in options.xhrFields��{
						xhr [i] = options.xhrFields [i];
					}
				}

				//�����Ҫ������mime����
				if��options.mimeType && xhr.overrideMimeType��{
					xhr.overrideMimeType��options.mimeType��;
				}

				// X-Requested-With����
				//���ڿ���������ΪԤ�������
				//������ƴͼ��Ϸ�����Ǹ�����û�а���ȷ��������
				//�������ǿ��Ի���ÿ���������ã���������ʹ��ajaxSetup���ã�
				//����ͬ����������Ѿ��ṩ���򲻻���ı�ͷ��
				if����options.crossDomain &&��headers [��X-Requested-With��]��{
					headers [��X-Requested-With��] =��XMLHttpRequest��;
				}

				//���ñ���
				for��i in headers��{
					xhr.setRequestHeader��i��headers [i]��;
				}

				// �����
				callback = function��type��{
					return function����{
						if��callback��{
							ɾ��xhrCallbacks [id];
							callback = xhr.onload = xhr.onerror = null;

							if��type ===��abort����{
								xhr.abort����;
							} else if��type ===��error����{
								��ɣ�
									// file��protocol���ǲ���״̬0; ����8605����14207
									xhr.status��
									xhr.statusText
								��;
							} else {
								��ɣ�
									xhrSuccessStatus [xhr.status] || xhr.status��
									xhr.statusText��
									//֧�֣�IE9
									//���ʶ���������responseText�������쳣
									//����11426��
									typeof xhr.responseText ===��string����{
										text��xhr.responseText
									}��undefined��
									xhr.getAllResponseHeaders����
								��;
							}
						}
					};
				};

				//��ȡ�¼�
				xhr.onload = callback����;
				xhr.onerror = callback����error����;

				//������ֹ�ص�
				callback = xhrCallbacks [id] =�ص�����abort����;

				����{
					//������������������쳣��
					xhr.send��options.hasContent && options.data || null��;
				} catch��e��{
					//��14683�������δ����֪ͨΪ������������׳�
					if��callback��{
						�ӵ�;
					}
				}
			}��

			abort��function����{
				if��callback��{
					���������;
				}
			}
		};
	}
}��;




//��װ�ű�dataType
jQuery.ajaxSetup��{
	���ܣ�{
		�ű�����text / javascript��application / javascript��application / ecmascript��application / x-ecmascript��
	}��
	���ݣ�{
		�ű���/������java | ecma���ű�/
	}��
	ת������{
		��text script����function��text��{
			jQuery.globalEval��text��;
			��������;
		}
	}
}��;

//����������������crossDomain
jQuery.ajaxPrefilter����script����function��s��{
	if��s.cache === undefined��{
		s.cache = false;
	}
	if��s.crossDomain��{
		s.type =��GET��;
	}
}��;

//�󶨽ű���Ǻڿʹ���
jQuery.ajaxTransport����script����function��s��{
	//�˴���������������
	if��s.crossDomain��{
		var�ű����ص�;
		����{
			���ͣ�function��_��complete��{
				script = jQuery����<script>������prop��{
					async��true��
					charset��s.scriptCharset��
					src��s.url
				}�����ϣ�
					�����ش��󡱣�
					callback = function��evt��{
						script.remove����;
						callback = null;
						if��evt��{
							��ɣ�evt.type ===��error����404��200��evt.type��;
						}
					}
				��;
				document.head.appendChild��script [0]��;
			}��
			abort��function����{
				if��callback��{
					���������;
				}
			}
		};
	}
}��;




var oldCallbacks = []��
	rjsonp = /��=��\������=��| $��| \��\��/;

//Ĭ�ϵ�jsonp����
jQuery.ajaxSetup��{
	jsonp�����ص�����
	jsonpCallback��function����{
		var callback = oldCallbacks.pop����|| ��jQuery.expando +��_��+��nonce ++����;
		��[callback] = true;
		���ػص�;
	}
}��;

//��⣬�淶��ѡ�Ϊjsonp����װ�ص�
jQuery.ajaxPrefilter����json jsonp����function��s��originalSettings��jqXHR��{

	var callbackName��overwritten��responseContainer��
		jsonProp = s.jsonp��== false &&��rjsonp.test��s.url����
			����ַ����
			typeof s.data ===��string��&&����s.contentType ||��������indexOf����application / x-www-form-urlencoded����&& rjsonp.test��s.data��&&��data��
		��;

	//���Ԥ�ڵ����������ǡ�jsonp��������������һ��Ҫ���õĲ������봦��
	if��jsonProp || s.dataTypes [0] ===��jsonp����{

		//��ȡ�ص����ƣ���ס��֮������Ԥ�ȴ��ڵ�ֵ
		callbackName = s.jsonpCallback = jQuery.isFunction��s.jsonpCallback����
			s.jsonpCallback������
			s.jsonpCallback;

		//���ص����뵽url���������
		if��jsonProp��{
			s [jsonProp] = s [jsonProp] .replace��rjsonp����$ 1��+ callbackName��;
		} else if��s.jsonp��== false��{
			s.url + =��rquery.test��s.url��������������������+ s.jsonp +��=��+ callbackName;
		}

		//ʹ������ת�����ڽű�ִ�к����json
		s.converters [��script json��] = function����{
			if����responseContainer��{
				jQuery.error��callbackName +��δ�����á���;
			}
			return responseContainer [0];
		};

		//ǿ��json dataType
		s.dataTypes [0] =��json��;

		//��װ�ص�
		overwritten = window [callbackName];
		window [callbackName] = function����{
			responseContainer = arguments;
		};

		//�����ܣ�ת�����󴥷���
		jqXHR.always��function����{
			//�ָ���ǰ���ڵ�ֵ
			window [callbackName] =����;

			//����Ϊ���
			if��s [callbackName]��{
				//ȷ������ʹ����Щѡ����������ü���
				s.jsonpCallback = originalSettings.jsonpCallback;

				//����ص������Ա�����ʹ��
				oldCallbacks.push��callbackName��;
			}

			//�������һ����������ã�������һ����Ӧ
			if��responseContainer && jQuery.isFunction�����ǣ���{
				���ǣ�responseContainer [0]��;
			}

			responseContainer = overwritten = undefined;
		}��;

		//ί�ɸ��ű�
		���ء��ű���;
	}
}��;




// data��html���ַ���
// context����ѡ�������ָ�������ڴ��������д���Ƭ�Σ�Ĭ��Ϊdocument
// keepScripts����ѡ�������Ϊtrue����������html�ַ����д��ݵĽű�
jQuery.parseHTML = function��data��context��keepScripts��{
	if����data || typeof data��==��string����{
		return null;
	}
	if��typeof context ===��boolean����{
		keepScripts = context;
		context = false;
	}
	context = context || ����;

	var parsed = rsingleTag.exec��data����
		scripts =��keepScripts && [];

	//������ǩ
	if���ѽ�����{
		return [context.createElement��parsed [1]��];
	}

	parsed = jQuery.buildFragment��[data]��context��scripts��;

	if��scripts && scripts.length��{
		jQuery���ű���.remove����;
	}

	return jQuery.merge��[]��parsed.childNodes��;
};


//�����ɼ��ط����ĸ���
var _load = jQuery.fn.load;

/ **
 *����ַ���ص�ҳ����
 * /
jQuery.fn.load = function��url��params��callback��{
	if��typeof url��==��string��&& _load��{
		return _load.apply��this��arguments��;
	}

	varѡ���������ͣ���Ӧ��
		����=�����
		off = url.indexOf��������;

	if��off> = 0��{
		selector = jQuery.trim��url.slice��off����;
		url = url.slice��0��off��;
	}

	//�������һ������
	if��jQuery.isFunction��params����{

		//���Ǽ������ǻص�
		callback = params;
		params = undefined;

	//���򣬹���һ�������ַ���
	} else if��params && typeof params ===��object����{
		type =��POST��;
	}

	//�������Ҫ�޸�Ԫ�أ��뷢������
	if��self.length> 0��{
		jQuery.ajax��{
			��ַ����ַ

			//�����type������δ���壬��ʹ�á�GET������
			���ͣ����ͣ�
			dataType����html����
			���ݣ�params
		��ɣ�function��responseText��{

			//������Ӧ�����������ص�
			response = arguments;

			self.html��ѡ������

				//���ָ����ѡ��������������div���ҵ���ȷ��Ԫ��
				//�ų��ű��Ա���IE'Ȩ�ޱ��ܾ�'����
				jQuery����<div>������append��jQuery.parseHTML��responseText������find��selector����

				//����ʹ���������
				responseText��;

		}������ɣ��ص�&&������jqXHR��status��{
			self.each��callback��response || [jqXHR.responseText��status��jqXHR]��;
		}��;
	}

	�黹���;
};




//����һ�Ѻ�������������AJAX�¼�
jQuery.each��[��ajaxStart������ajaxStop������ajaxComplete������ajaxError������ajaxSuccess������ajaxSend��]��function��i��type��{
	jQuery.fn [type] = function��fn��{
		return this.on��type��fn��;
	};
}��;




jQuery.expr.filters.animated = function��elem��{
	return jQuery.grep��jQuery.timers��function��fn��{
		return elem === fn.elem;
	}��������;
};




var docElem = window.document.documentElement;

/ **
 *��Ԫ���л�ȡһ������
 * /
function getWindow��elem��{
	����jQuery.isWindow��elem����elem��elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset��function��elem��options��i��{
		var curPosition��curLeft��curCSSTop��curTop��curOffset��curCSSLeft��calculatePosition��
			position = jQuery.css��elem����position������
			curElem = jQuery��elem����
			props = {};

		//��������λ�ã���ʹ�ھ�̬elem��Ҳ������in-top top / left
		if��position ===��static����{
			elem.style.position =�����ݡ�;
		}

		curOffset = curElem.offset����;
		curCSSTop = jQuery.css��elem����top����;
		curCSSLeft = jQuery.css��elem����left����;
		calculatePosition =��λ��===�����ԡ�||λ��===���̶�����&&
			��curCSSTop + curCSSLeft��.indexOf����auto����> -1;

		//����еĻ�����Ҫ�ܹ�����λ��
		//������������Զ���λ���Ǿ��ԵĻ�̶���
		if��calculatePosition��{
			curPosition = curElem.position����;
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat��curCSSTop��|| 0;
			curLeft = parseFloat��curCSSLeft��|| 0;
		}

		if��jQuery.isFunction��options����{
			options = options.call��elem��i��curOffset��;
		}

		if��options.top��= null��{
			props.top =��options.top  -  curOffset.top��+ curTop;
		}
		if��options.left��= null��{
			props.left =��options.left  -  curOffset.left��+ curLeft;
		}

		if��ѡ���еġ�using����{
			options.using.call��elem��props��;

		} else {
			curElem.css�����ߣ�;
		}
	}
};

1.3�У�{
	offset��function��options��{
		if��arguments.length��{
			����ѡ��=== undefined��
				��� ��
				this.each��function��i��{
					jQuery.offset.setOffset��this��options��i��;
				}��;
		}

		var docElem��win��
			elem = this [0]��
			box = {top��0��left��0}��
			doc = elem && elem.ownerDocument;

		if����doc��{
			����;
		}

		docElem = doc.documentElement;

		//ȷ�������ǶϿ����ӵ�DOM�ڵ�
		if����jQuery.contains��docElem��elem����{
			�س���;
		}

		//֧�֣�BlackBerry 5��iOS 3��ԭװiPhone��
		//�������û��gBCR��ֻ��ʹ��0,0�����Ǵ���
		if��typeof elem.getBoundingClientRect��== strundefined��{
			box = elem.getBoundingClientRect����;
		}
		win = getWindow��doc��;
		����{
			������box.top + win.pageYOffset  -  docElem.clientTop��
			left��box.left + win.pageXOffset  -  docElem.clientLeft
		};
	}��

	position��function����{
		if����this [0]��{
			����;
		}

		var offsetParent��offset��
			elem = this [0]��
			parentOffset = {top��0��left��0};

		//�̶�Ԫ��ƫ�봰�ڣ�parentOffset = {top��0��left��0}����Ϊ����Ψһ��ƫ�Ƹ�Ԫ��
		if��jQuery.css��elem����position����===��fixed����{
			//�������λ�ù̶�ʱ��getBoundingClientRect��������
			offset = elem.getBoundingClientRect����;

		} else {
			//��ȡ* real * offsetParent
			offsetParent = this.offsetParent����;

			//�����ȷ��ƫ����
			offset = this.offset����;
			if����jQuery.nodeName��offsetParent [0]����html������{
				parentOffset = offsetParent.offset����;
			}

			//���offsetParent�߿�
			parentOffset.top + = jQuery.css��offsetParent [0]����borderTopWidth����true��;
			parentOffset.left + = jQuery.css��offsetParent [0]����borderLeftWidth����true��;
		}

		//��ȥ��ƫ������Ԫ�ر߾�
		����{
			top��offset.top  -  parentOffset.top  -  jQuery.css��elem����marginTop����true����
			left��offset.left  -  parentOffset.left  -  jQuery.css��elem����marginLeft����true��
		};
	}��

	offsetParent��function����{
		return this.map��function����{
			var offsetParent = this.offsetParent || docElem;

			while��offsetParent &&����jQuery.nodeName��offsetParent����html����&& jQuery.css��offsetParent����position����===��static������{
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		}��;
	}
}��;

//����scrollLeft��scrollTop����
jQuery.each��{scrollLeft����pageXOffset����scrollTop����pageYOffset��}��function��method��prop��{
	var top =��pageYOffset��=== prop;

	jQuery.fn [method] = function��val��{
		return access��this��function��elem��method��val��{
			var win = getWindow��elem��;

			if��val === undefined��{
				�ع�ʤ����win [prop]��elem [����];
			}

			if��win��{
				win.scrollTo��
					����� ��val��window.pageXOffset��
					��� ��val��window.pageYOffset
				��;

			} else {
				elem [����] = val;
			}
		}��method��val��arguments.length��null��;
	};
}��;

//֧�֣�Safari <7 +��Chrome <37+
//ʹ��jQuery.fn.position���top / left cssHooks
// Webkit bug��https��//bugs.webkit.org/show_bug.cgi��id = 29084
// Blink bug��https��//code.google.com/p/chromium/issues/detail��id = 229280
// getComputedStyle��Ϊtop / left / bottom / rightָ��ʱ���ذٷֱ�;
//��������cssģ��������ƫ��ģ�飬ֻ������������
jQuery.each��[��top������left��]��function��i��prop��{
	jQuery.cssHooks [prop] = addGetHookIf��support.pixelPosition��
		function��elem��calculated��{
			if��computed��{
				computed = curCSS��elem��prop��;
				//���curCSS���ذٷֱȣ�����˵�ƫ����
				return rnumnonpx.test��computed����
					jQuery��elem��.position����[prop] +��px����
					����;
			}
		}
	��;
}��;


//����innerHeight��innerWidth��height��width��outerHeight��outerWidth����
jQuery.each��{Height����height����Width����width��}��function��name��type��{
	jQuery.each��{padding����inner��+ name��content��type����������outer��+ name}��function��defaultExtra��funcName��{
		//�߾��������outerHeight��outerWidth
		jQuery.fn [funcName] = function��margin��value��{
			var chainable = arguments.length &&��defaultExtra || typeof margin��==��boolean������
				extra = defaultExtra || ��margin === true || value === true����margin������border����;

			return access��this��function��elem��type��value��{
				var doc;

				if��jQuery.isWindow��elem����{
					//����2012��5��8�գ��⽫ΪMobile Safari��������ȷ�Ľ������������
					//�������������ĺܶ����顣����Ĵ�URL�ϵ���ȡ�����Թ����ۣ�
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement [��client��+ name];
				}

				//��ȡ�ĵ���Ȼ�߶�
				if��elem.nodeType === 9��{
					doc = elem.documentElement;

					//����[���/�߶�]��ƫ��[���/�߶�]��ͻ���[���/�߶�]��
					//�����ĸ���ΰ��
					����Math.max��
						elem.body [��scroll��+ name]��doc [��scroll��+ name]��
						elem.body [��offset��+ name]��doc [��offset��+ name]��
						doc [���ͻ���+����]
					��;
				}

				����ֵ=== undefined��
					//��ȡԪ�صĿ�Ȼ�߶ȣ����󵫲�ǿ��parseFloat
					jQuery.css��elem��type��extra����

					//��Ԫ�������ÿ�Ȼ�߶�
					jQuery.style��elem��type��value��extra��;
			�����ͣ������ӣ�margin��undefined��chainable��null��;
		};
	}��;
}��;


//ƥ��Ԫ�ؼ��а�����Ԫ����
jQuery.fn.size = function����{
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




//ע��Ϊ������AMDģ�飬��ΪjQuery����������ģ������
//����ʹ��define���ļ���������ͨ���ʵ������ӽű�
//�˽�����AMDģ�顣��ΪAMD�İ�ȫ����ǿ��
//ע�᷽ʽ ʹ��Сдjquery����ΪAMDģ��������
//���ļ���������jQueryͨ����Сд��ʽ�ṩ
// �ļ������ڴ���ȫ��֮��ִ�д˲������Ա���AMDģ����Ҫʱִ�д˲���
//����noConflict����������汾��jQuery�����������á�

//��ע�⣬Ϊ�˻�����Ŀ���ֲ�ԣ���Ӧ����jQuery�Ŀ�
//���Լ�����Ϊ����ģ�飬����������ȫ��if
// AMD���س�����ڡ�jQuery��һ���������йظ�����Ϣ�������
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if��typeof define ===��function��&& define.amd��{
	define����jquery����[]��function����{
		return jQuery;
	}��;
}




VAR
	//�ڸ��ǵ������ӳ��jQuery
	_jQuery = window.jQuery��

	//�ڸ��ǵ�����¸���$
	_ $ = window��$;

jQuery.noConflict = function��deep��{
	if��window��$ === jQuery��{
		���ڡ�$ = _ $;
	}

	if��deep && window.jQuery === jQuery��{
		window.jQuery = _jQuery;
	}

	return jQuery;
};

//��¶jQuery��$ identifier����ʹ��AMD��Ҳ�����
//����7102��comment��10��https��//github.com/jquery/jquery/pull/557��
//�������ģ������CommonJS����13566��
if��typeof noGlobal === strundefined��{
	window.jQuery = window��$ = jQuery;
}




return jQuery;

}����;