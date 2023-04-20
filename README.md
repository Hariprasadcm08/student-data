## Create a tables with details of students and their marks with multiple subjects

>>.Ex:

>>.STUDENT TABLE :
student_id ,student_name,standard

>>.MARKS TABLE:
marks_id,student_id,subject_name,marks,test_date

## create create a Node Application with below REST endpoints:

>>. /students this end point should work with pagination support. and user can able to pass specific
standards as input

>>. /fetch_results this API should send a response of student results with student name and % ,Result
like[fail,F.class, S.class, distinction].(Results should be in a % with the sum of multiple subjects. if the % is &lt;35 [Fail] , &gt;35 &amp; &lt;60 [Second class] , &gt;60 &amp; &lt;85 [First class] ,   &gt;85 [distinction]
