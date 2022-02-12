<?php

namespace Api;

class Attendance extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $iD;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("PY_CRM");
        $this->setSource("attendance");
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Attendance[]|Attendance|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null): \Phalcon\Mvc\Model\ResultsetInterface
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Attendance|\Phalcon\Mvc\Model\ResultInterface|\Phalcon\Mvc\ModelInterface|null
     */
    public static function findFirst($parameters = null): ?\Phalcon\Mvc\ModelInterface
    {
        return parent::findFirst($parameters);
    }

}
