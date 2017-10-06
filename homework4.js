/*
 *  printStarsTriangle() differs from
 *	printStarsCheckerBoard() with the space
 *  after * i.e. '*' and '* '
 */
const printStarsTriangle = function(count)
{
	if (count === 0)return '';
	return '*' + printStarsTriangle(count - 1);
};

const printStarsCheckerBoard = function(count)
{
	if (count === 0)return '';
	return '* ' + printStarsCheckerBoard(count - 1);
};

const insertSpace = function(count)
{
  	if (count <= 0) return '';
	return ' ' + insertSpace(count - 1);
};

const reverse = function(str)
{
	const rev = function(element)
	{
		if (element <  0) return '';
		return str[element] + rev(element - 1);
	};	
	return rev(str.length - 1);
};

const pow = function(base, n)
{
	if (n === 0) return 1;
	return base * pow(base, n - 1);
};

const triangle = function(height)
{
	const print = function(count, lineStars)
	{
		if (count === height)return '';
		return insertSpace(count) + printStarsTriangle(lineStars) + '\n' + print(count + 1, lineStars - 2);
	};
	return print(0, (height * 2) - 1)
};

const checkerBoard = function(n)
{
	if (n <= 0) return '';
	const newLineStar = function(count)
	{
		if (count === 0) return '';
		return ((count % 2 == 0)? ' ' : "") + printStarsCheckerBoard(n) + '\n' + newLineStar(count - 1);
	};
	return newLineStar(n)  + '\n';
};